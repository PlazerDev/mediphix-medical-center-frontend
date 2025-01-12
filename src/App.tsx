import { AuthProvider } from "@asgardeo/auth-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MedicalCenterStaffRoutes from "./routes/MedicalCenterStaffRoutes.tsx";
import { ConfigProvider } from "antd";
import LandingPage from "./pages/LandingPage.tsx";
import MedicalCenterReceptionistRoutes from "./routes/MedicalCenterReceptionistRoutes.tsx";
import MedicalCenterAdminRoutes from "./routes/MedicalCenterAdminRoutes.tsx";
import MedicalCenterLabStaffRoutes from "./routes/MedicalCenterLabStaffRoutes.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import { LoadingProvider } from "./contexts/LoadingContext.tsx";

function App() {
  const asgardeoConfig = {
    signInRedirectURL: "http://localhost:5175",
    signOutRedirectURL: "http://localhost:5175",
    clientID: import.meta.env.VITE_ASGARDEO_CLIENT_ID,
    baseUrl: import.meta.env.VITE_ASGARDEO_BASE_URL,
    scope: [
      "openid",
      "email",
      "profile",
      "update_own_medical_center_details",
      "update_appointment_queue",
    ],
  };
  return (
    <>
      <AuthProvider config={asgardeoConfig}>
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#ff7300",
              colorInfo: "#ff7300",
              borderRadius: 8,
            },
            components: {
              Pagination: {
                itemActiveBg: "", // remove the default active bg color
              },
            },
          }}
        >
          <LoadingProvider>
            <Router>
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                {/* Medical Center Staff Routes  */}
                <Route
                  path="/medicalCenterStaff/*"
                  element={<MedicalCenterStaffRoutes />}
                />
                {/* Medical Center Receptionist Routes  */}
                <Route
                  path="/medicalCenterReceptionist/*"
                  element={<MedicalCenterReceptionistRoutes />}
                />
                {/* Medical Center Admin Routes  */}
                <Route
                  path="/medicalCenterAdmin/*"
                  element={<MedicalCenterAdminRoutes />}
                />
                {/* Medical Center Lab Staff Routes  */}
                <Route
                  path="/medicalCenterLabStaff/*"
                  element={<MedicalCenterLabStaffRoutes />}
                />
              </Routes>
            </Router>
          </LoadingProvider>
        </ConfigProvider>
      </AuthProvider>
    </>
  );
}

export default App;
