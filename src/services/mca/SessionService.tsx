import axios from "axios";
import { StorageService } from "../StorageService";
import { AlertService } from "../AlertService";
import { NavigateFunction, useNavigate } from "react-router-dom";

export type vacancyData = {
  mainRangeStartDate: string;
  mainRangeEndDate: string;
  selectedDate: string;
  repeatDays: string[];
  subRangeEndDate: string;
  startTime: String;
  endTime: String;
};

export type additionalData = {
  aptCategories: string[];
  noteForDoctors: string;
  contactNumber: string;
};

interface SessionDataRecord {
  timeFrame: string;
  date: string;
  startTime: string;
  endTime: string;
  noteFromDoctor: string;
  noteFromMedicalCenter: string;
  appointmentCategories: string[];
  doctorDetails: DoctorDataRecord;
  timeSlotDetails: TimeSlotDataRecord[];
}

interface DoctorDataRecord {
  name: string;
  id: string;
}

interface TimeSlotDataRecord {
  startTime: string;
  endTime: string;
  maxPatients: string;
  currLastPatientNumber: string;
}

export interface FinalVacancyRecord {
  aptCategories: string[];
  medicalCenterId: string;
  mobile: string;
  vacancyNoteToDoctors: string;
  openSessions: VacancySessionRecord[];
}

export interface VacancySessionRecord {
  startTime: string;
  endTime: string;
  rangeStartTimestamp: string;
  rangeEndTimestamp: string;
  repetition: RepetitionRecord;
}

export interface RepetitionRecord {
  isRepeat: boolean;
  days: string[];
  noRepeatDateTimestamp?: string;
}

export class SessionService {
  // convert vacancyData[], and additionalData to FinalVacancyRecord inorder to send it as the payload
  static formatVacancyDataToSend(
    vacancyDataList: vacancyData[],
    additionalDataObj: additionalData
  ): FinalVacancyRecord {
    const vacancyList: VacancySessionRecord[] = [];

    vacancyDataList.forEach((vacancy) => {
      let rangeStartTimestamp: string =
        vacancy.mainRangeStartDate + "T00:00:00.00+05:30";
      let rangeEndTimestamp: string =
        vacancy.mainRangeEndDate + "T00:00:00.00+05:30";
      const startTime: string =
        vacancy.mainRangeStartDate + "T" + vacancy.startTime + ":00.00+05:30";
      const endTime: string =
        vacancy.mainRangeStartDate + "T" + vacancy.endTime + ":00.00+05:30";

      const repeatData: RepetitionRecord = {
        days: [],
        isRepeat: true,
      };

      if (vacancy.repeatDays.length == 0) {
        // case :: no repeat data
        repeatData.isRepeat = false;
        repeatData.noRepeatDateTimestamp =
          vacancy.selectedDate + "T00:00:00.00+05:30";
        rangeStartTimestamp = vacancy.selectedDate + "T00:00:00.00+05:30";
        rangeEndTimestamp = vacancy.selectedDate + "T00:00:00.00+05:30";
      } else {
        // case :: repeat data available
        vacancy.repeatDays.forEach((day) => {
          repeatData.days.push(day.toUpperCase());
        });
      }

      vacancyList.push({
        endTime: endTime,
        startTime: startTime,
        rangeEndTimestamp: rangeEndTimestamp,
        rangeStartTimestamp: rangeStartTimestamp,
        repetition: repeatData,
      });
    });

    const data: FinalVacancyRecord = {
      aptCategories: additionalDataObj.aptCategories,
      medicalCenterId: StorageService.getCenterId() || "",
      mobile: additionalDataObj.contactNumber,
      vacancyNoteToDoctors: additionalDataObj.noteForDoctors,
      openSessions: vacancyList,
    };
    return data;
  }

  // REQ :: create a session vacacncy
  static async postSessionVacancy(
    vacancyDataList: vacancyData[],
    additionalDataObj: additionalData,
    accessToken: string,
    navigate: NavigateFunction,
    stopLoading: () => void
  ): Promise<void> {
    const payload: FinalVacancyRecord = this.formatVacancyDataToSend(
      vacancyDataList,
      additionalDataObj
    );
    console.log(payload);

    const url = "http://localhost:9000/mca/createSessionVacancy";

    try {
      const response = await axios.post(url, payload, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });
      stopLoading();
      AlertService.showSuccessTimerAlert(
        "Success!",
        "Session vacancy sucessfully published"
      );
      navigate("/medicalCenterAdmin/sessions/vacancies/");
    } catch (error: any) {
      stopLoading();
      console.error("Error creating session vacancy:", error);
      AlertService.showErrorTimerAlert("Action Failed!", error);
    }
  }

  // TODO :: remove this later
  static getSampleSessionData(): SessionDataRecord {
    return {
      timeFrame: "Morning",
      date: "2024-12-02",
      startTime: "09:00 AM",
      endTime: "12:00 PM",
      noteFromDoctor: "Discuss ongoing treatment and follow-up tests.",
      noteFromMedicalCenter:
        "Ensure all test reports are uploaded before the session.",
      appointmentCategories: ["General Checkup", "Follow-Up", "Emergency"],
      doctorDetails: {
        name: "Dr. John Smith",
        id: "DOC12345",
      },
      timeSlotDetails: [
        {
          startTime: "09:00 AM",
          endTime: "10:00 AM",
          maxPatients: "5",
          currLastPatientNumber: "3",
        },
        {
          startTime: "10:00 AM",
          endTime: "11:00 AM",
          maxPatients: "5",
          currLastPatientNumber: "4",
        },
        {
          startTime: "11:00 AM",
          endTime: "12:00 PM",
          maxPatients: "5",
          currLastPatientNumber: "2",
        },
      ],
    };
  }
}
