import { Route, Routes } from "react-router-dom";
import MCRHomePage from "../pages/medical-center-receptionist/MCRHomePage";
import MCRAppointmentsMainPage from "../pages/medical-center-receptionist/MCRAppointmentsMainPage";
import MCRAppointmentsPaymentsPage from "../pages/medical-center-receptionist/MCRAppointmentsPaymentsPage";

function MedicalCenterReceptionistRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MCRHomePage />} />
      <Route path="/appointments" element={<MCRAppointmentsMainPage />} />
      <Route
        path="/appointments/payment"
        element={<MCRAppointmentsPaymentsPage />}
      />
    </Routes>
  );
}

export default MedicalCenterReceptionistRoutes;
