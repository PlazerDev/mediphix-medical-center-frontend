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
        "eyJ4NXQiOiJsWlVzZlFhVEpNQUlIMldadTJvVGRPcEdmbTgiLCJraWQiOiJZMkprTkRjd1ltUmtOVGxtTURnM05UYzNNemcwWmpsbE1tUTRPVEkzWkdZM1ltRTNObU14TmpFeFptUTBPVGxsTWpOaFpEbGpPR001TW1Sa05UWTJaUV9SUzI1NiIsInR5cCI6ImF0K2p3dCIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI5ZGZhNDQyYS1mNmNmLTQ4Y2YtODE1OC1mY2VmZTc5M2ViZTEiLCJhdXQiOiJBUFBMSUNBVElPTl9VU0VSIiwiYmluZGluZ190eXBlIjoic3NvLXNlc3Npb24iLCJpc3MiOiJodHRwczpcL1wvYXBpLmFzZ2FyZGVvLmlvXC90XC9tZWRpcGhpeFwvb2F1dGgyXC90b2tlbiIsImNsaWVudF9pZCI6IndzM3pUX3RjdGlfZEFYYW03Y3BKOWVMOXJ2d2EiLCJhdWQiOiJ3czN6VF90Y3RpX2RBWGFtN2NwSjllTDlydndhIiwibmJmIjoxNzMzMDcxOTc1LCJhenAiOiJ3czN6VF90Y3RpX2RBWGFtN2NwSjllTDlydndhIiwib3JnX2lkIjoiYmUxOGZkODMtMTlkZS00ZGY4LWI3ODUtODQ0YjgxMDk4YjNhIiwic2NvcGUiOiJjaGVja19wYXRpZW50IGVtYWlsIGluc2VydF9hcHBvaW50bWVudCBvcGVuaWQgcHJvZmlsZSByZXRyaWV2ZV9vd25fcGF0aWVudF9kYXRhIiwiZXhwIjoxNzMzMTA3OTc1LCJvcmdfbmFtZSI6Im1lZGlwaGl4IiwiaWF0IjoxNzMzMDcxOTc1LCJiaW5kaW5nX3JlZiI6Ijc1MTBmZTA3ZGYyNDhjNjM0OTUzZjBkZTM1M2JmNTk2IiwianRpIjoiNDc5MWU4NzgtODUzZi00MWRmLTkxOTAtNDFjZDM2ZDI5MTAwIiwidXNlcm5hbWUiOiJjbWNAZ21haWwuY29tIn0.cv0Xws1s0Txnycmku8_SjHXphAKTirl04cWDsSYwNCaN77S2kWNFXMIrsKuJoZvKn6yN_Dcftw0V8W7Y06C2-_Fs-ck-51jYFx1-WeUWx9BDwt1E5L5XZv6Y-majaJiDPHq_cKZKsEQy5ArmZ2Xh8-EVoMcm-nilYXMm_L9gfkhAPLUrUIiJwDpU1FvCBPJHX0UesWhGGIeuf3ZiL3kgzHTqqLvSIi1LVk8DO4vfZcGWOM8NHTFRplJgJ1iPe-c2Pynmxu4JQIBQaZVOr_c2lJNyv0N7IpkB4hdUwuqTmacf1KStLf94hjv9xm2cbrCph73kHiSqsDlzy8-ds-fKxw";

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
