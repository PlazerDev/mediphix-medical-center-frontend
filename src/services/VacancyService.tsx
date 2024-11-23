export interface VacancyDetailed {
  additionalData: AdditionalData;
  dateAndTimeData: DateTimeData[];
  responseData: ResponseDate[];
}

interface AdditionalData {
  openedDate: string;
  openedTime: string;
  appointmentCategories: string[];
  contactNumber: string;
  status: number;
  noteForDoctor: string;
}

interface DateTimeData {
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  repetition: string[];
  selectedDate: string;
}

interface ResponseDate {
  id: string;
  doctorName: string;
  dateSent: string;
  timeSent: string;
  status: number; // 0 - rejected |  1 - pending | 2 - approved
}

export class VacancyService {
  static getSampleData(): VacancyDetailed {
    const data: VacancyDetailed = {
      additionalData: {
        openedDate: "2024-06-15",
        openedTime: "10:30 AM",
        appointmentCategories: ["General Checkup", "OPD"],
        contactNumber: "+94713072925",
        status: 1, // Status 1 could represent "OPEN"
        noteForDoctor: "Contact us for additional information.",
      },
      dateAndTimeData: [
        {
          startTime: "09:00 AM",
          endTime: "12:00 PM",
          startDate: "2024-06-15",
          endDate: "2024-06-15",
          repetition: ["MON", "WED", "FRI"],
          selectedDate: "",
        },
        {
          startTime: "02:00 PM",
          endTime: "05:00 PM",
          startDate: "2024-06-16",
          endDate: "2024-06-16",
          repetition: [],
          selectedDate: "2024-06-16",
        },
      ],
      responseData: [
        {
          id: "1",
          doctorName: "Dr. John Smith",
          dateSent: "2024-06-14",
          timeSent: "11:00 AM",
          status: 1, // Pending
        },
        {
          id: "2",
          doctorName: "Dr. Emily Brown",
          dateSent: "2024-06-14",
          timeSent: "12:00 PM",
          status: 2, // Approved
        },
        {
          id: "3",
          doctorName: "Dr. Michael Johnson",
          dateSent: "2024-06-14",
          timeSent: "02:00 PM",
          status: 0, // Rejected
        },
      ],
    };

    return data;
  }
}

export default VacancyService;
