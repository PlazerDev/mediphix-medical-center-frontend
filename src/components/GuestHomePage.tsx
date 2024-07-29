import {useAuthContext} from "@asgardeo/auth-react";
import CustomButton from "./medical-center/CustomButton.tsx";

function GuestHomePage() {
    const {signIn} = useAuthContext();

    return (
        <>
            <div style={{minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center"}}>
                <CustomButton onClick={() => signIn()} label={"Log In"}/>
            </div>
        </>
    )
}

export default GuestHomePage;