import axios from "axios";
import { StorageService } from "../StorageService";
import { AlertService } from "../AlertService";
import { FinalCenterAdminData } from "../../components/signup/SignUpCardBody";
import { NavigateFunction } from "react-router-dom";

export class UserService {
  // REQ :: geting userData
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

  // REQ :: creating a new MCS profile
  static async postAddNewStaffMember(data: any, stopLoading: () => void) {
    const url = "http://localhost:9000/registration/medicalCenterStaff";

    try {
      await axios.post(
        url,
        {
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          nic: data.nic,
          centerId: StorageService.getCenterId() || "",
          empId: data.empID,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      stopLoading();
      AlertService.showSuccessTimerAlert(
        "Success!",
        "Medical Center Staff Member Added Successfully"
      );
      setTimeout(() => {
        window.location.reload();
      }, 1300);
    } catch (error: any) {
      stopLoading();
      console.error("Error creating medical center staff profile!", error);
      AlertService.showErrorTimerAlert("Action Failed!", error);
    }
  }

  // REQ :: creating a new MCR profile
  static async postAddNewReceptionMember(data: any, stopLoading: () => void) {
    const url =
      "http://localhost:9000/registration/registerMedicalCenterReceptionist";

    try {
      await axios.post(
        url,
        {
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          nic: data.nic,
          centerId: StorageService.getCenterId() || "",
          empId: data.empID,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      stopLoading();
      AlertService.showSuccessTimerAlert(
        "Success!",
        "Medical Center Receptionist Added Successfully"
      );
      setTimeout(() => {
        window.location.reload();
      }, 1300);
    } catch (error: any) {
      stopLoading();
      console.error("Error creating medical center reception profile!", error);
      AlertService.showErrorTimerAlert("Action Failed!", error);
    }
  }

  // REQ :: creating a new MCR profile
  static async postAddNewLabMember(data: any, stopLoading: () => void) {
    const url =
      "http://localhost:9000/registration/registerMedicalCenterLabStaff";

    try {
      await axios.post(
        url,
        {
          name: data.name,
          email: data.email,
          mobile: data.mobile,
          nic: data.nic,
          centerId: StorageService.getCenterId() || "",
          empId: data.empID,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      stopLoading();
      AlertService.showSuccessTimerAlert(
        "Success!",
        "Medical Center Lab Member Added Successfully"
      );
    } catch (error: any) {
      stopLoading();
      console.error("Error creating medical center Lab profile!", error);
      AlertService.showErrorTimerAlert("Action Failed!", error);
    }
  }

  // REQ :: creating a new Medical Center & Admin profile
  static async registerMedicalCenterAndAdmin(
    data: FinalCenterAdminData,
    stopLoading: () => void,
    navigate: NavigateFunction
  ) {
    console.log("Here is data, ", data);
    const url = "http://localhost:9000/registration/medicalCenter";

    try {
      await axios.post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      stopLoading();
      AlertService.showSuccessTimerAlert(
        "Success!",
        "Medical Center registerd successfully"
      );
      navigate("/");
    } catch (error: any) {
      stopLoading();
      console.error("Error registering medical center and admin !", error);
      AlertService.showErrorTimerAlert("Action Failed!", error);
    }
  }

  // REQ :: get all MCS users of the center
  static async getAllMCSmembers(
    getAccessToken: () => Promise<string>,
    stopLoading: () => void,
    setResult: React.Dispatch<any>
  ) {
    try {
      const token = await getAccessToken();
      const response = await axios.get(`http://localhost:9000/mca/MCSdata`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setResult(response.data);
      console.log(response.data);
      stopLoading();
    } catch (error: any) {
      console.error("Error:", error);
      setResult(null);
      stopLoading();
      AlertService.showErrorTimerAlert("Couldn't find any staff members", "");
    }
  }

  // REQ :: get all MCS users of the center
  static async getAllMCRmembers(
    getAccessToken: () => Promise<string>,
    stopLoading: () => void,
    setResult: React.Dispatch<any>
  ) {
    try {
      const token = await getAccessToken();
      const response = await axios.get(`http://localhost:9000/mca/MCRdata`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setResult(response.data);
      console.log(response.data);
      stopLoading();
    } catch (error: any) {
      console.error("Error:", error);
      setResult(null);
      stopLoading();
      AlertService.showErrorTimerAlert(
        "Couldn't find any receptionist members",
        ""
      );
    }
  }
}
