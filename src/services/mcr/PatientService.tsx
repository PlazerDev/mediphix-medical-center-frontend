import axios from "axios";

export type PatientRegistrationDataRecord = {
  fname: string;
  lname: string;
  mobile: string;
  dob: string;
  nic: string;
  email: string;
  address: string;
  nationality: string;
  password: string;
  confirmPassword: string;
  gender: string;
};

class PatientService {
  //   Registers a patient by sending the data to the server.
  static async registerPatient(patientData: PatientRegistrationDataRecord) {
    try {
      const response = await axios.post(
        "http://localhost:9000/patient/register/patient",
        patientData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      return response.data; // Return server's response data
    } catch (error: any) {
      // Handle and rethrow the error
      console.error(
        "Error registering patient:",
        error.response?.data || error.message
      );
      throw error.response?.data || new Error("Unable to register patient.");
    }
  }
}

export default PatientService;
