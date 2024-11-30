import { Route, Routes } from "react-router-dom";
import MCRHomePage from "../pages/medical-center-receptionist/MCRHomePage";
import MCRAppointmentsMainPage from "../pages/medical-center-receptionist/MCRAppointmentsMainPage";
import MCRAppointmentsPaymentsPage from "../pages/medical-center-receptionist/MCRAppointmentsPaymentsPage";
import MCRPrintRecieptPage from "../pages/medical-center-receptionist/MCRPrintRecieptPage";
import MCRPatientRegisterPage from "../pages/medical-center-receptionist/MCRPatientRegisterPage";
import MCRAppointmentsCreatePage from "../pages/medical-center-receptionist/MCRAppointmentsCreatePage";
import MCRAppointmentsCreateSecondPage from "../pages/medical-center-receptionist/MCRAppointmentsCreateSecondPage";

function MedicalCenterReceptionistRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MCRHomePage />} />
      <Route path="/appointments" element={<MCRAppointmentsMainPage />} />
      <Route
        path="/appointments/payment"
        element={<MCRAppointmentsPaymentsPage />}
      />
      <Route
        path="/appointments/createNew"
        element={<MCRAppointmentsCreatePage />}
      />
      <Route
        path="/appointments/createNew/:appointmentId"
        element={<MCRAppointmentsCreateSecondPage />}
      />
      <Route
        path="/appointments/payment/print/:appointmentNumber"
        element={<MCRPrintRecieptPage />}
      />
      <Route path="/registerPatient" element={<MCRPatientRegisterPage />} />
    </Routes>
  );
}

export default MedicalCenterReceptionistRoutes;
