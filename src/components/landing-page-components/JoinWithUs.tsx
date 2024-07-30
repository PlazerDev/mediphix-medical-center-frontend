import BtnFilled from "./BtnFilled";

function JoinWithUs() {
  return (
    <div className="flex flex-col justify-center items-center bg-mediphix_accent text-white p-8 rounded-lg">
      <p className="text-center font-bold text-2xl">Ready to Join With Us ?</p>
      <p className="text-center text-mediphix_background my-4">
        Join our network and see how our Medical Center Management Portal can
        enhance your operations and patient care. Make the switch today and
        experience the benefits firsthand!
      </p>
      <div className="w-32">
        <BtnFilled
          title="Join Now"
          style="bg-black hover:bg-white text-white hover:text-black"
        />
      </div>
    </div>
  );
}

export default JoinWithUs;
