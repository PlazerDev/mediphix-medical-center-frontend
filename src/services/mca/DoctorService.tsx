interface DoctorRequestDataRecord {
  name: string;
  id: string;
  date: string;
  noOfMedicalCenters: string;
}

export class DoctorService {
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
}
