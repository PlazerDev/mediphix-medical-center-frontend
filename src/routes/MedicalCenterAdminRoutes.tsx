import { Route, Routes } from "react-router-dom";
import MCAHomePage from "../pages/medical-center-admin/MCAHomePage";
import MCADoctorMainPage from "../pages/medical-center-admin/MCADoctorMainPage";
import MCACStaffMainPage from "../pages/medical-center-admin/MCACStaffMainPage";
import MCASessionMainPage from "../pages/medical-center-admin/MCASessionMainPage";
import MCAUpcommingSessionListPage from "../pages/medical-center-admin/MCAUpcommingSessionListPage";
import MCAUpcommingSessionPage from "../pages/medical-center-admin/MCAUpcommingSessionPage";
import MCASessionVacancyMainPage from "../pages/medical-center-admin/MCASessionVacancyMainPage";
import MCASessionVacancyCreateNewPage from "../pages/medical-center-admin/MCASessionVacancyCreateNewPage";
import MCASessionVacancyDetailedPage from "../pages/medical-center-admin/MCASessionVacancyDetailedPage";
import MCASessionVacancyResponsePage from "../pages/medical-center-admin/MCASessionVacancyResponsePage";
import MCADoctorJoinRequestMainPage from "../pages/medical-center-admin/MCADoctorJoinRequestMainPage";

function MedicalCenterAdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MCAHomePage />} />
      <Route path="/doctors" element={<MCADoctorMainPage />} />
      <Route
        path="/doctors/joinRequests"
        element={<MCADoctorJoinRequestMainPage />}
      />

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
      <Route
        path="/sessions/vacancies/:vacancyId"
        element={<MCASessionVacancyDetailedPage />}
      />
      <Route
        path="/sessions/vacancies/:vacancyId/:responseId"
        element={<MCASessionVacancyResponsePage />}
      />
      <Route
        path="/sessions/vacancies/createNew"
        element={<MCASessionVacancyCreateNewPage />}
      />
    </Routes>
  );
}

export default MedicalCenterAdminRoutes;
