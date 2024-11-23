interface ResponseData {
  requestApplicationData: RequestApplicationData;
  doctorData: DoctorData;
  dateAndTimeData: DateAndTimeData[];
}

interface RequestApplicationData {
  submittedDate: string;
  submittedTime: string;
}

interface DoctorData {
  doctorId: string;
  name: string;
  contactNumber: string;
  noteForPatients: string;
}

interface DateAndTimeData {
  id: string;
  hasApplied: boolean;
  slotData: SlotData[]; // Provided directly by the backend
  startTime: string;
  endTime: string;
  startDate: string;
  endDate: string;
  repetition: string[];
  selectedDate: string; // if repetition[] is empty otherwise an empty string
}

interface SlotData {
  startTime: string;
  endTime: string;
  noOfPatients: number;
}

export class ResponseService {
  static getSampleResponseData(): ResponseData {
    const data: ResponseData = {
      requestApplicationData: {
        submittedDate: "2024-11-23",
        submittedTime: "10:15 AM",
      },
      doctorData: {
        doctorId: "D1234",
        name: "Dr. John Doe",
        contactNumber: "+94712345678",
        noteForPatients: "Please arrive 15 minutes before the scheduled time.",
      },
      dateAndTimeData: [
        {
          id: "1",
          hasApplied: true,
          slotData: [
            {
              startTime: "09:00",
              endTime: "10:00",
              noOfPatients: 3,
            },
            {
              startTime: "10:00",
              endTime: "11:00",
              noOfPatients: 5,
            },
          ],
          startTime: "09:00",
          endTime: "11:00",
          startDate: "2024-11-25",
          endDate: "2024-11-25",
          repetition: [],
          selectedDate: "2024-11-25",
        },
        {
          id: "2",
          hasApplied: false,
          slotData: [],
          startTime: "02:00",
          endTime: "04:00",
          startDate: "2024-11-26",
          endDate: "2024-11-26",
          repetition: [],
          selectedDate: "2024-11-26",
        },
        {
          id: "3",
          hasApplied: true,
          slotData: [
            {
              startTime: "10:00",
              endTime: "11:00",
              noOfPatients: 4,
            },
            {
              startTime: "11:00",
              endTime: "12:00",
              noOfPatients: 2,
            },
          ],
          startTime: "10:00",
          endTime: "12:00",
          startDate: "2024-11-27",
          endDate: "2024-11-27",
          repetition: ["MON", "WED", "FRI"],
          selectedDate: "",
        },
      ],
    };

    return data;
  }
}

export default ResponseService;
