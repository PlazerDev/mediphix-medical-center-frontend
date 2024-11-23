import { Route, Routes } from "react-router-dom";
import MCLSHomePage from "../pages/medical-center-lab-staff/MCLSHomePage";
import MCLSReportsPage from "../pages/medical-center-lab-staff/MCLSReportsPage";

function MedicalCenterLabStaffRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MCLSHomePage />} />
      <Route path="/labReports" element={<MCLSReportsPage />} />
    </Routes>
  );
}

export default MedicalCenterLabStaffRoutes;
