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
          description="Manage doctor schedules effortlessly by adding, editing, and organizing them to ensure optimal utilization of your medical staff. Streamline your operations with efficient staff management by assigning roles, monitoring performance, and improving workflow. Oversee patient appointments to minimize overlaps and ensure a smooth patient flow, enhancing the overall experience for your patients."
          img={featureImg1}
        />
        <Feature
          isReverse={true}
          title="For Medical Center Staff"
          description="Efficient queue management and patient handling are critical for enhancing patient satisfaction. Keep track of patient queues to minimize waiting times, and monitor patient progress through different stages of their visit for a seamless experience. Ensure resources are allocated effectively, so they are available where and when needed for maximum efficiency."
          img={featureImg2}
        />
        <Feature
          isReverse={false}
          title="For Medical Center Receptionists"
          description="Hassle-free appointment booking and management streamline the entire process. Book, reschedule, and cancel appointments with ease, while quickly accessing patient records to provide personalized service. Enhance communication by sending notifications and reminders to patients, reducing no-shows, and improving appointment adherence."
          img={featureImg3}
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
