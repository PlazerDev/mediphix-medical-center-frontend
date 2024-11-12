import { Route, Routes } from "react-router-dom";
import MCAHomePage from "../pages/medical-center-admin/MCAHomePage";
import MCADoctorMainPage from "../pages/medical-center-admin/MCADoctorMainPage";
import MCACStaffMainPage from "../pages/medical-center-admin/MCACStaffMainPage";

function MedicalCenterAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MCAHomePage />} />
      <Route path="/doctors" element={<MCADoctorMainPage />} />
      <Route path="/staff" element={<MCACStaffMainPage />} />
      <Route path="/sessions" element={<MCASessionMainPage />} />
    </Routes>
  );
}

export default MedicalCenterAdminRoutes;
