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

export class SessionService {
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
