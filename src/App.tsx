import { AuthProvider } from "@asgardeo/auth-react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MedicalCenterStaffRoutes from "./routes/MedicalCenterStaffRoutes.tsx";
import { ConfigProvider } from "antd";
import LandingPage from "./pages/LandingPage.tsx";

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
      "insert_appointment",
      "retrieve_own_patient_data",
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
          <Router>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* Medical Center Staff Routes  */}
              <Route
                path="/medicalCenterStaff/*"
                element={<MedicalCenterStaffRoutes />}
              />
            </Routes>
          </Router>
        </ConfigProvider>
      </AuthProvider>
    </>
  );
}

export default App;
