interface StaffMemberDataRecord {
  name: string;
  email: string;
  empID: string;
  mobileNumber: string;
  id: string;
}

export class StaffService {
  static getSampleStaffMemberList(): StaffMemberDataRecord[] {
    return [
      {
        name: "Ajith Perera",
        email: "ajith.perera@example.com",
        empID: "EMP001",
        mobileNumber: "0712345678",
        id: "1",
      },
      {
        name: "Sanduni Gunawardena",
        email: "sanduni.gunawardena@example.com",
        empID: "EMP002",
        mobileNumber: "0776543210",
        id: "2",
      },
      {
        name: "Kamal Wickramasinghe",
        email: "kamal.wickramasinghe@example.com",
        empID: "EMP003",
        mobileNumber: "0751234567",
        id: "3",
      },
      {
        name: "Nuwan Fernando",
        email: "nuwan.fernando@example.com",
        empID: "EMP004",
        mobileNumber: "0769876543",
        id: "4",
      },
      {
        name: "Dilani Jayawardena",
        email: "dilani.jayawardena@example.com",
        empID: "EMP005",
        mobileNumber: "0704567891",
        id: "5",
      },
    ];
  }
}
