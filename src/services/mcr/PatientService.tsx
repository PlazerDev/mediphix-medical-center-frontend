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

export class PatientService {
  // Registers a patient by sending the data to the server.
  static async registerPatient(patientData: PatientRegistrationDataRecord) {
    try {
      const token =
        "eyJ4NXQiOiJsWlVzZlFhVEpNQUlIMldadTJvVGRPcEdmbTgiLCJraWQiOiJZMkprTkRjd1ltUmtOVGxtTURnM05UYzNNemcwWmpsbE1tUTRPVEkzWkdZM1ltRTNObU14TmpFeFptUTBPVGxsTWpOaFpEbGpPR001TW1Sa05UWTJaUV9SUzI1NiIsInR5cCI6ImF0K2p3dCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhMTBmYWYyNC04ZjRmLTQ1MjgtYTBkMy04Njg5ZGE1MDQzYTAiLCJhdXQiOiJBUFBMSUNBVElPTl9VU0VSIiwiYmluZGluZ190eXBlIjoic3NvLXNlc3Npb24iLCJpc3MiOiJodHRwczpcL1wvYXBpLmFzZ2FyZGVvLmlvXC90XC9tZWRpcGhpeFwvb2F1dGgyXC90b2tlbiIsImNsaWVudF9pZCI6IndzM3pUX3RjdGlfZEFYYW03Y3BKOWVMOXJ2d2EiLCJhdWQiOiJ3czN6VF90Y3RpX2RBWGFtN2NwSjllTDlydndhIiwibmJmIjoxNzMzMTU4NTU5LCJhenAiOiJ3czN6VF90Y3RpX2RBWGFtN2NwSjllTDlydndhIiwib3JnX2lkIjoiYmUxOGZkODMtMTlkZS00ZGY4LWI3ODUtODQ0YjgxMDk4YjNhIiwic2NvcGUiOiJjaGVja19wYXRpZW50IGVtYWlsIGluc2VydF9hcHBvaW50bWVudCBvcGVuaWQgcHJvZmlsZSByZXRyaWV2ZV9vd25fcGF0aWVudF9kYXRhIiwiZXhwIjoxNzMzMTk0NTU5LCJvcmdfbmFtZSI6Im1lZGlwaGl4IiwiaWF0IjoxNzMzMTU4NTU5LCJiaW5kaW5nX3JlZiI6ImRjM2M4MDdmOWE4OGJhNmY3YWU5ZjFhNzc5OWFiODdjIiwianRpIjoiODZkNDk0N2QtOTg4Yy00NDc0LWJmMzgtOGIxZTczYWM0MDcyIiwidXNlcm5hbWUiOiJzYXNobWl0aGFyYXZpbmR1NzdAZ21haWwuY29tIn0.JrAHDdAuWnS9AA2utlUpHXwxdUOlRADCBwXiH_CmxaGHh9SQVRxFEVB-xlqkIWqYjc1T3RpGW42oU8hskK0duHCaa4W_YAc0nZCkY2TUaB1nMgMSH_jEK8eKOgFVc5PZsOgit-8vimabMTiYivV1gyaeu8Q9I6eazEsfD8Hi8Qdh7VQqu2Px2KldpCZKOa9khDX1i41RlkKmIXMdLcgquQ2xgfsdW47kE7W18xZVnXa3n54WXUIVe1-XvtmbGA_A25EXdX3TvbNPeLy8zMt67qfaWzwCGuLBhsyerFIPUPAbJr-H6WRfMWkgdpSYGxfflSUWP04e6SRBjntPxCjwNg";

      if (!token) {
        throw new Error("No authentication token found");
      }

      const response = await axios.post(
        "http://localhost:9000/patient/register/patient",
        patientData,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Add the token to the headers
          },
        }
      );

      return response.data; // Return server's response data
    } catch (error: any) {
      console.error(
        "Error registering patient:",
        error.response?.data || error.message
      );
      throw error.response?.data || new Error("Unable to register patient.");
    }
  }
}
