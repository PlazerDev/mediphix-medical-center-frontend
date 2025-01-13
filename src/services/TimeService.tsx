export class TimeService {
  static getGreeting(): string {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Good Morning! Let's go";
    } else if (currentHour >= 12 && currentHour < 17) {
      return "Good Afternoon! Keep going";
    } else if (currentHour >= 17 && currentHour < 21) {
      return "Good Evening! Keep it up";
    } else {
      return "Night Owl! Shine on";
    }
  }
}
