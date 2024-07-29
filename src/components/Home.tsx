import { useAuthContext } from "@asgardeo/auth-react";
import GuestHomePage from "./GuestHomePage.tsx";
import MedicalCenterStaffHomePage from "../pages/medical-center-staff/MedicalCenterStaffHomePage.tsx";

function Home() {
  const { state } = useAuthContext();
  return !state.isAuthenticated ? (
    <GuestHomePage />
  ) : (
    <MedicalCenterStaffHomePage />
  );
}

export default Home;
