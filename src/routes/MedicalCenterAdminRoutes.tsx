import { Route, Routes } from "react-router-dom";
import MCAHomePage from "../pages/medical-center-admin/MCAHomePage";
import MCADoctorMainPage from "../pages/medical-center-admin/MCADoctorMainPage";
import MCACStaffMainPage from "../pages/medical-center-admin/MCACStaffMainPage";
import MCASessionMainPage from "../pages/medical-center-admin/MCASessionMainPage";
import MCAUpcommingSessionListPage from "../pages/medical-center-admin/MCAUpcommingSessionListPage";
import MCAUpcommingSessionPage from "../pages/medical-center-admin/MCAUpcommingSessionPage";
import MCASessionVacancyMainPage from "../pages/medical-center-admin/MCASessionVacancyMainPage";

function MedicalCenterAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MCAHomePage />} />
      <Route path="/doctors" element={<MCADoctorMainPage />} />
      <Route path="/staff" element={<MCACStaffMainPage />} />
      <Route path="/sessions" element={<MCASessionMainPage />} />
      <Route
        path="/sessions/upcommingSessions"
        element={<MCAUpcommingSessionListPage />}
      />
      <Route
        path="/clinicSessions/upcommingSessions/:sessionId"
        element={<MCAUpcommingSessionPage />}
      />
      <Route
        path="/sessions/vacancies"
        element={<MCASessionVacancyMainPage />}
      />
    </Routes>
  );
}

export default MedicalCenterAdminRoutes;
