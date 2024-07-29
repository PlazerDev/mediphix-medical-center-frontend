import {useAuthContext} from "@asgardeo/auth-react";
import MedicalCenterHome from "./medical-center/MedicalCenterHome.tsx";
import GuestHomePage from "./GuestHomePage.tsx";

function Home() {
    const {state} = useAuthContext();
    return (
        !state.isAuthenticated ?
            <GuestHomePage/>
            :
            <MedicalCenterHome/>

    );
}


export default Home
