import { Route, Routes } from "react-router-dom";
import MCAHomePage from "../pages/medical-center-admin/MCAHomePage";
import MCADoctorMainPage from "../pages/medical-center-admin/MCADoctorMainPage";

function MedicalCenterAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MCAHomePage />} />
      <Route path="/doctors" element={<MCADoctorMainPage />} />
    </Routes>
  );
}

export default MedicalCenterAdminRoutes;
