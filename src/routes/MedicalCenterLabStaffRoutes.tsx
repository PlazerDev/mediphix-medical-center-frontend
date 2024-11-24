import { Route, Routes } from "react-router-dom";
import MCLSHomePage from "../pages/medical-center-lab-staff/MCLSHomePage";
import MCLSReportsPage from "../pages/medical-center-lab-staff/MCLSReportsPage";
import MCLSDoctorPage from "../pages/medical-center-lab-staff/MCLSDoctorPage";
import MCLSDoctorDetailedPage from "../pages/medical-center-lab-staff/MCLSDoctorDetailedPage";

function MedicalCenterLabStaffRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MCLSHomePage />} />
      <Route path="/labReports" element={<MCLSReportsPage />} />
      <Route path="/ourDoctors" element={<MCLSDoctorPage />} />
      <Route
        path="/ourDoctors/:doctorId"
        element={<MCLSDoctorDetailedPage />}
      />
    </Routes>
  );
}

export default MedicalCenterLabStaffRoutes;
