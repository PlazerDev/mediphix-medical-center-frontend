import { Route, Routes } from "react-router-dom";
import MCLSHomePage from "../pages/medical-center-lab-staff/MCLSHomePage";

function MedicalCenterLabStaffRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MCLSHomePage />} />
    </Routes>
  );
}

export default MedicalCenterLabStaffRoutes;
