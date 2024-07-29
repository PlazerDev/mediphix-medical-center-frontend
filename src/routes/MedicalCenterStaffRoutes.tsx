import { Route, Routes } from "react-router-dom";
import MedicalCenterStaffHomePage from "../pages/medical-center-staff/MedicalCenterStaffHomePage";

function MedicalCenterStaffRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MedicalCenterStaffHomePage />} />
      <Route
        path="/onGoingSessions"
        element={<MedicalCenterStaffOnGoingSessionsListPage />}
      />
      {/*
      <Route
        path="/onGoingSessions/:sessionId"
        element={<MedicalCenterStaffOngoingSessionPage />}
      />
      <Route
        path="/onGoingSessions/:sessionId/startNextPatientConfirm"
        element={<MedicalCenterStaffStartNextSessionPage />}
      />
      <Route
        path="/upcomingSessions"
        element={<MedicalCenterStaffUpcomingSessionPage />}
      /> */}
    </Routes>
  );
}

export default MedicalCenterStaffRoutes;
