import SignUpCardBody from "../components/signup/SignUpCardBody";
import pattern from "./../assets/images/signup/widgetsBg.png";

function SignUpPage() {
  return (
    <div className="bg-mediphix_background h-screen w-screen relative">
      <div className="flex justify-end h-full">
        <img
          src={pattern}
          alt="Background Image"
          className="object-cover h-full max-h-screen mix-blend-luminosity"
        />
      </div>

      <div className="absolute top-0 left-0 flex justify-center items-center z-10 h-full w-full">
        <SignUpCardBody />
      </div>
    </div>
  );
}

export default SignUpPage;
