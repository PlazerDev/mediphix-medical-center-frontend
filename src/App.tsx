import { AuthProvider } from "@asgardeo/auth-react";
import Home from "./components/Home.tsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MedicalCenterStaffRoutes from "./routes/MedicalCenterStaffRoutes.tsx";
import { ConfigProvider } from "antd";

function App() {
  const asgardioConfig = {
    signInRedirectURL: "http://localhost:5173",
    signOutRedirectURL: "http://localhost:5173",
    clientID: import.meta.env.VITE_PATIENT_ASGARDEO_CLIENT_ID,
    baseUrl: import.meta.env.VITE_PATIENT_ASGARDEO_BASE_URL,
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
      <AuthProvider config={asgardioConfig}>
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
              <Route path="/" element={<Home />} />
              {/* Medical Center Staff Routes  */}
              <Route path="/mcs/*" element={<MedicalCenterStaffRoutes />} />
            </Routes>
          </Router>
        </ConfigProvider>
      </AuthProvider>
    </>
  );
}

export default App;
