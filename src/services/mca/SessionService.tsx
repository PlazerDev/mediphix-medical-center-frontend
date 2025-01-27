import axios from "axios";
import { StorageService } from "../StorageService";
import { AlertService } from "../AlertService";
import { NavigateFunction } from "react-router-dom";

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
      await axios.post(url, payload, {
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

  // REQ :: GET
  static async getOngoingSessionList(
    getAccessToken: () => Promise<string>,
    setResult: React.Dispatch<any>,
    stopLoading: () => void
  ) {
    try {
      const token = await getAccessToken();
      const response = await axios.get(
        `http://localhost:9000/mcs/ongoingClinicSessions`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResult(response.data);
      stopLoading();
    } catch (error: any) {
      console.error("Error:", error);
      setResult(null);
      stopLoading();
      AlertService.showErrorTimerAlert(
        "Couldn't find any on going sessions !",
        ""
      );
    }
  }

  // REQ :: GET
  static async getOngoingSessionDetails(
    sessionId: string,
    getAccessToken: () => Promise<string>,
    setResult: React.Dispatch<any>,
    stopLoading: () => void,
    navigate: NavigateFunction
  ) {
    try {
      const token = await getAccessToken();
      const response = await axios.get(
        `http://localhost:9000/mcs/ongoingClinicSessions/${sessionId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResult(response.data);
      console.log(response.data);
      stopLoading();
    } catch (error: any) {
      console.error("Error:", error);
      setResult(null);
      stopLoading();
      AlertService.showErrorTimerAlert(
        "Couldn't find the session details !",
        ""
      );
      navigate("/medicalCenterStaff/onGoingSessions");
    }
  }

  static getNextStartableSlotIndex(
    data: { status: "STARTED" | "NOT_STARTED" | "FINISHED" }[]
  ): [string, boolean] | null {
    for (let i = 0; i < data.length; i++) {
      if (data[i].status === "NOT_STARTED") {
        return [(i + 1).toString(), true]; // Slot can be started
      } else if (data[i].status === "STARTED") {
        return [(i + 1).toString(), false]; // Slot is already started
      }
    }
    return null; // Everything is finished
  }

  // REQ :: PUT
  static async stratTimeSlot(
    sessionId: string,
    getAccessToken: () => Promise<string>,
    stopLoading: () => void,
    navigate: NavigateFunction
  ) {
    try {
      const token = await getAccessToken();
      await axios.put(
        `http://localhost:9000/mcs/startTimeSlot/?sessionId=${sessionId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      stopLoading();
      AlertService.showSuccessTimerAlert("Success", "The Time Slot Started");
      navigate("/medicalCenterStaff/onGoingSessions/" + sessionId);
    } catch (error: any) {
      console.error("Error:", error);
      stopLoading();
      AlertService.showErrorTimerAlert(
        "Action Failed",
        "Couldn't start the time slot"
      );
    }
  }

  // REQ :: PUT
  static async stratNextAppointment(
    sessionId: string,
    slotId: string,
    getAccessToken: () => Promise<string>,
    stopLoading: () => void
  ) {
    try {
      console.log("here", sessionId, slotId);
      const token = await getAccessToken();
      await axios.put(
        `http://localhost:9000/mcs/startAppointment/?sessionId=${sessionId}&slotId=${slotId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      stopLoading();
      AlertService.showSuccessTimerAlert(
        "Success",
        "The next patient appointment started"
      );
    } catch (error: any) {
      console.error("Error:", error);
      stopLoading();
      AlertService.showErrorTimerAlert(
        "Action Failed",
        "Couldn't start the next appointment" + error
      );
    }
  }

  // REQ :: GET
  static async getSessionListToAssign(
    getAccessToken: () => Promise<string>,
    setResult: React.Dispatch<any>,
    stopLoading: () => void
  ) {
    try {
      const token = await getAccessToken();
      const response = await axios.get(
        `http://localhost:9000/mca/activeSessions`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResult(response.data);
      console.log(response.data);
      stopLoading();
    } catch (error: any) {
      console.error("Error:", error);
      setResult(null);
      stopLoading();
      AlertService.showErrorTimerAlert(
        "Couldn't find the session details !",
        ""
      );
    }
  }

  // REQ :: PUT
  static async assignSession(
    sessionId: string,
    mcsId: string,
    getAccessToken: () => Promise<string>,
    stopLoading: () => void
  ) {
    try {
      const token = await getAccessToken();
      await axios.put(
        `http://localhost:9000/mca/assign?sessionId=${sessionId}&mcsId=${mcsId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      stopLoading();
      AlertService.showSuccessTimerAlert(
        "Success",
        "The session assigned to the staff member"
      );
      setTimeout(() => {
        window.location.reload();
      }, 1300);
    } catch (error: any) {
      console.error("Error:", error);
      stopLoading();
      AlertService.showErrorTimerAlert(
        "Action Failed",
        "Couldn't assigned the session" + error
      );
    }
  }

  // REQ :: GET
  static async getVacancyData(
    getAccessToken: () => Promise<string>,
    setResult: React.Dispatch<any>,
    stopLoading: () => void
  ) {
    try {
      const token = await getAccessToken();
      const response = await axios.get(
        `http://localhost:9000/mca/getMcaSessionVacancies`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResult(response.data);
      console.log(response.data);
      stopLoading();
    } catch (error: any) {
      console.error("Error:", error);
      setResult(null);
      stopLoading();
    }
  }

  // REQ :: PUT
  static async acceptSession(
    vacacncyId: string,
    sessionId: string,
    resId: string,
    formData: any,
    getAccessToken: () => Promise<string>,
    stopLoading: () => void
  ) {
    try {
      const token = await getAccessToken();
      await axios.patch(
        `http://localhost:9000/mca/acceptDoctorResponseApplicationToOpenSession/${vacacncyId}/${resId}/${sessionId}`,
        {
          noteFromCenter: formData.note,
          hallNumber: formData.hallNumber,
          payment: Number(formData.appointmentPayment),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      stopLoading();
      AlertService.showSuccessTimerAlert(
        "Success",
        "The new session(s) is created for this application"
      );
      setTimeout(() => {
        window.location.reload();
      }, 1300);
    } catch (error: any) {
      console.error("Error:", error);
      stopLoading();
      AlertService.showErrorTimerAlert(
        "Action Failed",
        "Please try again later"
      );
    }
  }

  // REQ :: GET
  static async getJoinReq(
    getAccessToken: () => Promise<string>,
    setResult: React.Dispatch<any>,
    stopLoading: () => void
  ) {
    try {
      const token = await getAccessToken();
      const response = await axios.get(
        `http://localhost:9000/mca/joinRequests`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.length == 0) {
        setResult(null);
      } else {
        setResult(response.data);
      }
      console.log(response.data);
      stopLoading();
    } catch (error: any) {
      console.error("Error:", error);
      setResult(null);
      stopLoading();
    }
  }

  // REQ :: PUT
  static async acceptJoinReq(
    reqId: string,
    getAccessToken: () => Promise<string>,
    stopLoading: () => void
  ) {
    try {
      const token = await getAccessToken();
      await axios.put(
        `http://localhost:9000/mca/acceptRequest?reqId=${reqId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      stopLoading();
      AlertService.showSuccessTimerAlert("Success", "Join request is accepted");
      setTimeout(() => {
        window.location.reload();
      }, 1300);
    } catch (error: any) {
      console.error("Error:", error);
      stopLoading();
      AlertService.showErrorTimerAlert(
        "Action Failed",
        "Please try again later"
      );
    }
  }
}
