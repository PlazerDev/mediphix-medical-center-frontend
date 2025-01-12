export interface AppointmentDataRecord {
  id: string;
  doctorName: string;
  doctorId: string;
  date: string;
  startTime: string;
  endTime: string;
  appointmentCategories: string[];
  noteFromDoctor: string;
  noteFromMedicalCenter: string;
  isAllBooked: boolean;
}

export interface PatientDetailsRecord {
  name: string;
  mobileNumber: string;
  age: string;
  gender: string;
  nationality: string;
}

interface TimeSlotDataRecord {
  startTime: string;
  endTime: string;
  maxNumberOfPatients: string;
  currentLastQueueNumber: string;
  id: string;
}

export interface DetailedAppointmentDataRecord {
  patientData: PatientDetailsRecord;
  timeSlotData: TimeSlotDataRecord[];
  appointmentData: AppointmentDataRecord;
}

export class AppointmentService {
  static getSampleDetailedAppointmentData(): DetailedAppointmentDataRecord {
    return {
      patientData: {
        name: "John Doe",
        mobileNumber: "0771234567",
        age: "30-40",
        gender: "Male",
        nationality: "Sri Lankan",
      },
      timeSlotData: [
        {
          startTime: "09:00",
          endTime: "10:00",
          maxNumberOfPatients: "10",
          currentLastQueueNumber: "5",
          id: "1",
        },
        {
          startTime: "10:00",
          endTime: "11:00",
          maxNumberOfPatients: "10",
          currentLastQueueNumber: "3",
          id: "2",
        },
      ],
      appointmentData: {
        id: "A123",
        doctorName: "Dr. Jane Smith",
        doctorId: "D456",
        date: "2024-12-01",
        startTime: "09:00",
        endTime: "11:00",
        appointmentCategories: ["General Consultation", "Vaccination"],
        noteFromDoctor: "Check vitals and discuss vaccination schedule.",
        noteFromMedicalCenter:
          "Ensure patient brings previous vaccination records.",
        isAllBooked: false,
      },
    };
  }

  static getSampleAppointmentDataList(): AppointmentDataRecord[] {
    return [
      {
        id: "1",
        doctorName: "Dr. John Doe",
        doctorId: "D123",
        date: "2024-12-01",
        startTime: "09:00",
        endTime: "10:00",
        appointmentCategories: ["General Consultation", "Vaccination"],
        noteFromDoctor: "Discuss ongoing treatment.",
        noteFromMedicalCenter: "Ensure patient brings previous reports.",
        isAllBooked: false,
      },
      {
        id: "2",
        doctorName: "Dr. Jane Smith",
        doctorId: "D456",
        date: "2024-12-01",
        startTime: "11:00",
        endTime: "12:00",
        appointmentCategories: ["Lab Test"],
        noteFromDoctor: "Requires blood tests.",
        noteFromMedicalCenter: "Lab staff informed of urgent processing.",
        isAllBooked: true,
      },
      {
        id: "3",
        doctorName: "Dr. Alan Brown",
        doctorId: "D789",
        date: "2024-12-02",
        startTime: "14:00",
        endTime: "15:00",
        appointmentCategories: ["Specialist Visit"],
        noteFromDoctor: "Orthopedic consultation.",
        noteFromMedicalCenter: "Allocate special wheelchair access.",
        isAllBooked: false,
      },
    ];
  }
}
