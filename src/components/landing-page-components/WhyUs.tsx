import BtnFilled from "./BtnFilled";

function WhyUs() {
  return (
    <div className="flex flex-col justify-center items-center bg-mediphix_text_a text-white p-8 rounded-lg">
      <p className="text-center font-bold text-2xl ">Why Us?</p>
      <p className="text-center text-mediphix_background my-4">
        Our platform streamlines medical center operations by managing doctor
        schedules, patient appointments, and queues efficiently. Patients enjoy
        reduced waiting times and smooth visits, while staff benefit from
        easy-to-use tools for scheduling, communication, and resource
        allocation. Secure and customizable, our system enhances patient care
        and operational efficiency with real-time updates and notifications.
        Join us for a better healthcare management experience.
      </p>
      <div className="w-32">
        <BtnFilled
          title="Join Now"
          style="bg-[#e8e8e8] text-black hover:bg-white "
        />
      </div>
    </div>
  );
}

export default WhyUs;
