import Navigation from "../components/landing-page-components/Navigation";
import FirstSectionImg from "../components/landing-page-components/FirstSectionImg";
import FirstSectionTitle from "../components/landing-page-components/FirstSectionTitle";
import Stat from "../components/landing-page-components/Stat";
import Feature from "../components/landing-page-components/Feature";
import WhyUs from "../components/landing-page-components/WhyUs";
import Feedback from "../components/landing-page-components/Feedback";
import FAQ from "../components/landing-page-components/FAQ";
import JoinWithUs from "../components/landing-page-components/JoinWithUs";
import Footer from "../components/landing-page-components/Footer";
import featureImg1 from "./../assets/images/landing-page/feature_01.png";
import featureImg2 from "./../assets/images/landing-page/feature_02.png";
import featureImg3 from "./../assets/images/landing-page/feature_03.png";
import featureImg4 from "./../assets/images/landing-page/feature_04.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useAuthContext } from "@asgardeo/auth-react";
import { Navigate } from "react-router-dom";

function LandingPage() {
  const { state } = useAuthContext();

  useEffect(() => {
    AOS.init();
  }, []);

  return !state.isAuthenticated ? (
    <div className="min-h-screen bg-white">
      <Navigation />
      {/* First Section */}
      <div className="px-24 bg-mediphix_text_a">
        <FirstSectionTitle />
        <FirstSectionImg />
      </div>
      {/* Second Section */}
      <div className="bg-mediphix_card_background px-24 py-8">
        <Stat />
      </div>
      <div className="px-24 bg-mediphix_card_background">
        <Feature
          isReverse={false}
          title="For Medical Center Admins"
          description="Effortlessly manage doctor schedules by adding, editing, and organizing to ensure optimal staff utilization. Streamline operations with efficient staff management: assign roles, monitor performance, and enhance workflow. Oversee patient appointments to minimize overlaps and ensure smooth patient flow, enhancing the overall patient experience."
          img={featureImg1}
        />
        <Feature
          isReverse={true}
          title="For Medical Center Staff"
          description="Efficient queue management and patient handling are critical for patient satisfaction. Keep track of patient queues to minimize waiting times. Monitor patient progress through different stages of their visit for a seamless experience. Ensure resources are effectively allocated to be available where and when needed for maximum efficiency."
          img={featureImg2}
        />
        <Feature
          isReverse={false}
          title="For Medical Center Receptionists"
          description="Hassle-free appointment booking and management streamline the entire process. Easily book, reschedule, and cancel appointments while quickly accessing patient records for personalized service. Enhance communication by sending notifications and reminders to patients, reducing no-shows, and improving appointment adherence."
          img={featureImg3}
        />
        <Feature
          isReverse={true}
          title="For Labaratory Staff"
          description="Laboratory staff play a crucial role in the MediPhix system by managing lab-related tasks efficiently. They have the ability to accept or reject prescriptions based on the availability of tests, ensuring timely and accurate diagnostics. Lab staff can update the progress status of lab reports, add completed lab reports to the system, and include any necessary notes for further clarification. Additionally, they can view prescriptions to stay informed about the required tests, ultimately contributing to seamless patient care and effective communication between healthcare providers."
          img={featureImg4}
        />
      </div>
      <div className="bg-mediphix_card_background px-24 py-8">
        <WhyUs />
      </div>
      <div className="bg-mediphix_card_background px-24 py-8">
        <Feedback />
      </div>
      <div className="bg-mediphix_card_background px-24 py-8">
        <FAQ />
      </div>
      <div className="bg-mediphix_card_background px-24 py-8">
        <JoinWithUs />
      </div>
      <div className="bg-mediphix_card_background px-24 pt-8 pb-2">
        <Footer />
      </div>
    </div>
  ) : (
    <Navigate to={"medicalCenterStaff/"} />
  );
}

export default LandingPage;
