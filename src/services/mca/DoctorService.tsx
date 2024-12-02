interface DoctorRequestDataRecord {
  name: string;
  id: string;
  date: string;
  noOfMedicalCenters: string;
}

interface AppointmentDataRecord {
  name: string;
  date: string;
  startTime: string;
  endTime: string;
  appointmentCategories: string[];
}

export class DoctorService {
  static getSampleAppointmentDataList(): AppointmentDataRecord[] {
    return [
      {
        name: "Nawaloka Hospital",
        date: "2024-12-02",
        startTime: "09:00 AM",
        endTime: "10:00 AM",
        appointmentCategories: ["General Health", "Routine Checkup"],
      },
      {
        name: "Asiri Medical Center",
        date: "2024-12-02",
        startTime: "10:00 AM",
        endTime: "11:00 AM",
        appointmentCategories: ["Dental Care", "Tooth Extraction"],
      },
      {
        name: "Lanka Hospitals",
        date: "2024-12-02",
        startTime: "11:00 AM",
        endTime: "12:00 PM",
        appointmentCategories: ["Mental Health", "Stress Management"],
      },
      {
        name: "Durdans Hospital",
        date: "2024-12-03",
        startTime: "02:00 PM",
        endTime: "03:00 PM",
        appointmentCategories: ["Child Health", "Vaccinations"],
      },
      {
        name: "Hemas Hospital",
        date: "2024-12-03",
        startTime: "03:00 PM",
        endTime: "04:00 PM",
        appointmentCategories: ["Heart Health", "ECG Review"],
      },
    ];
  }

  static getSampleDoctorRequestList(): DoctorRequestDataRecord[] {
    return [
      {
        name: "Dr. John Smith",
        id: "DOC001",
        date: "2024-12-01",
        noOfMedicalCenters: "5",
      },
      {
        name: "Dr. Emily Johnson",
        id: "DOC002",
        date: "2024-11-30",
        noOfMedicalCenters: "3",
      },
      {
        name: "Dr. Rajesh Kumar",
        id: "DOC003",
        date: "2024-12-02",
        noOfMedicalCenters: "7",
      },
      {
        name: "Dr. Maria Gonzales",
        id: "DOC004",
        date: "2024-11-29",
        noOfMedicalCenters: "4",
      },
    ];
  }

  static getSampleMedicalCenterList(): string[] {
    return [
      "Nawaloka Hospital",
      "Asiri Medical Center",
      "Lanka Hospitals",
      "Durdans Hospital",
      "Hemas Hospital",
      "Teaching Hospital Colombo",
      "Ninewells Hospital",
      "Sri Jayawardenapura General Hospital",
      "National Hospital of Sri Lanka",
      "General Hospital Kandy",
    ];
  }
}
