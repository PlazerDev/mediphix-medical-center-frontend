import axios from "axios";

export class UserService {
  static async fetchUserRole(token: string) {
    try {
      const response = await axios.get(`http://localhost:9000/user/find`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const role = response.data.role;

      if (this.storeUserDataInLocalStorage(response.data) == -1) {
        // case :: storing failed!
        return "/";
      }

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

  static storeUserDataInLocalStorage(data: any): number {
    try {
      const userData = data.userData;
      const medicalCenterData = data.medicalCenterData;

      localStorage.setItem("userName", userData.name);
      localStorage.setItem("role", data.role);
      localStorage.setItem("userProfileImage", userData.profileImage);

      if (data.role == "MCA") {
        localStorage.setItem("medicalCenterEmail", userData.medicalCenterEmail);
        localStorage.setItem("centerId", medicalCenterData._id);
      } else {
        localStorage.setItem("centerId", userData.centerId);
      }

      localStorage.setItem("medicalCenterName", medicalCenterData.name);
      localStorage.setItem(
        "medicalCenterProfileImage",
        medicalCenterData.profileImage
      );
      return 0;
    } catch (error) {
      console.error("Failed to store user data in local storage:", error);
      return -1;
    }
  }
}
