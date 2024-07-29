import {AuthProvider} from "@asgardeo/auth-react";
import Home from "./components/Home.tsx";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
    const asgardioConfig = {
        signInRedirectURL: "http://localhost:5173",
        signOutRedirectURL: "http://localhost:5173",
        clientID: import.meta.env.VITE_PATIENT_ASGARDEO_CLIENT_ID,
        baseUrl: import.meta.env.VITE_PATIENT_ASGARDEO_BASE_URL,
        scope: ["openid", "email", "profile", "insert_appointment", "retrieve_own_patient_data"]
    };
    return (
        <>
            <AuthProvider config={asgardioConfig}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </Router>
            </AuthProvider>
        </>
    )
}

export default App
