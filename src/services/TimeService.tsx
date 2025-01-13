export class TimeService {
  static getGreeting(): string {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  static formatDate(timestamp: {
    year: number;
    month: number;
    day: number;
  }): string {
    const { year, month, day } = timestamp;

    // Ensure day and month are two-digit numbers
    const formattedDay = day.toString().padStart(2, "0");
    const formattedMonth = month.toString().padStart(2, "0");

    return `${formattedDay}/${formattedMonth}/${year}`;
  }

  static formatTime(timestamp: {
    hour: number;
    minute: number;
    second: number;
  }): string {
    const { hour, minute } = timestamp;

    // Ensure hours, minutes, and seconds are two-digit numbers
    const formattedHour = hour.toString().padStart(2, "0");
    const formattedMinute = minute.toString().padStart(2, "0");

    return `${formattedHour}:${formattedMinute}`;
  }
}
