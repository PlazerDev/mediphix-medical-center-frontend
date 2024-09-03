import { Route, Routes } from "react-router-dom";
import MCRHomePage from "../pages/medical-center-receptionist/MCRHomePage";

function MedicalCenterReceptionistRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MCRHomePage />} />
      <Route path="/appointments" element={<MCRHomePage />} />
    </Routes>
  );
}

export default MedicalCenterReceptionistRoutes;
