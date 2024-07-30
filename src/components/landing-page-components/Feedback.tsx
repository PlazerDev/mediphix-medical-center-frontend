import { Carousel } from "antd";
import FeedbackItem from "./FeedbackItem";
import feedbackImg01 from "./../../assets/images/landing-page/feedback1.png";
import feedbackImg02 from "./../../assets/images/landing-page/feedback2.png";
import feedbackImg03 from "./../../assets/images/landing-page/feedback3.png";

function Feedback() {
  return (
    <div className="bg-mediphix_text_d p-8 rounded-lg">
      <Carousel infinite={true} autoplay={true}>
        <FeedbackItem
          img={feedbackImg01}
          feedback="The queue management system has transformed our waiting areas. Patients are happier, and our operations run smoother."
          name="Nurse Nirmala Perera, Staff at Lanka Hospitals."
        />
        <FeedbackItem
          img={feedbackImg02}
          feedback="I love how easy it is to book appointments now. Our patients appreciate the efficiency, and our no-show rate has dropped."
          name="Receptionist Malini Silva, Receptionist at Hemas Hospital"
        />
        <FeedbackItem
          img={feedbackImg03}
          feedback="Since implementing the Medical Center Management Portal, our patient wait times have decreased significantly, and our staff is more organized than ever."
          name="Dr. Sunil Fernando, Admin at Asiri Medical Center."
        />
      </Carousel>
    </div>
  );
}

export default Feedback;
