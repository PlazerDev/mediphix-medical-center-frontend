import axios from "axios";

export class UserService {
  static async fetchUserRole(token: string) {
    try {
      const response = await axios.get(`http://localhost:9000/user/find`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const role = response.data.role; // Assuming backend response includes role field

      switch (role) {
        case "MCA":
          return "/medicalCenterAdmin/";
        case "MCR":
          return "/medicalCenterReceptionist/";
        case "MCS":
          return "/medicalCenterStaff/";
        case "MCLS":
          return "/medicalCenterLabStaff/";
        default:
          console.error("Invalid role.");
          return "/";
      }
    } catch (error) {
      console.error("Failed to fetch user role:", error);
      return "/";
    }
  }
}
