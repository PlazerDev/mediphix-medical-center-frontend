import { Route, Routes } from "react-router-dom";
import MCAHomePage from "../pages/medical-center-admin/MCAHomePage";

function MedicalCenterAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MCAHomePage />} />
    </Routes>
  );
}

export default MedicalCenterAdminRoutes;
