import { useAuthContext } from "@asgardeo/auth-react";
import logo from "./../../assets/images/mediphix_logo.png";
import BtnWithBorder from "./BtnWithBorder";
import BtnWithoutBorder from "./BtnWithoutBorder";
import DropDown from "./DropDown";
import { Link } from "react-router-dom";
import { useLoading } from "../../contexts/LoadingContext";

function Navigation() {
  const { signIn } = useAuthContext();
  const { startLoading, stopLoading } = useLoading();

  const handleSignIn = async () => {
    startLoading();
    try {
      await signIn();
      stopLoading();
    } catch (error) {
      console.error("Sign-in failed:", error);
      stopLoading();
    }
  };

  return (
    <div className="bg-mediphix_text_a px-24 py-4 flex flex-row justify-between items-center">
      <img src={logo} alt="logo" className="object-contain h-8" />
      <div className="flex gap-4 text-[#ededed]">
        <DropDown />
        <p className="hover:cursor-pointer hover:text-white">Features</p>
        <p className="hover:cursor-pointer hover:text-white">Feedbacks</p>
        <p className="hover:cursor-pointer hover:text-white">FAQ</p>
      </div>
      <div className="flex flex-row gap-4">
        <BtnWithoutBorder title="Login" onClickFunction={handleSignIn} />
        <Link to="/signup">
          <BtnWithBorder title="Register" />
        </Link>
      </div>
    </div>
  );
}

export default Navigation;
