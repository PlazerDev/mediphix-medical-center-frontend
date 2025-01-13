import Footer from "./../../components/Footer";
import doctorImg from "./../../assets/images/mcs/doctorImage.jpeg";
import { useState } from "react";
import dayjs from "dayjs";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSCalender from "../../components/mcs/MCSCalender";
import MCSSelectedDate from "../../components/mcs/MCSSelectedDate";
import MCSOnGoingSessionDetailsCard from "../../components/mcs/MCSOnGoingSessionDetailsCard";

function MedicalCenterStaffUpcomingSessionPage() {
  const currentDate = dayjs();

  const [dateComponents, setDateComponents] = useState({
    day: currentDate.format("DD"),
    weekday: currentDate.format("dddd"),
    month: currentDate.format("MMMM"),
    year: currentDate.format("YYYY"),
  });

  // Function to update state with date components
  const updateSelectedDate = (
    day: string,
    weekday: string,
    month: string,
    year: string
  ) => {
    setDateComponents({ day, weekday, month, year });
  };

  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterStaff",
    },
    {
      title: "Upcomming Sessions",
      link: "",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      <div className="flex-grow px-8">
        <MCSMainGreeting
          title="Upcomming Sessions"
          titleMemberName=""
          breadcrumbItems={breadcrumbItems}
          role="Medical Center Staff Member"
        />
        {/* Main Body div */}
        <MCSCalender updateSelectedDate={updateSelectedDate} />
        <MCSSelectedDate
          day={dateComponents.day}
          weekday={dateComponents.weekday}
          monthAndYear={dateComponents.month + " " + dateComponents.year}
        />
        <div>
          <MCSOnGoingSessionDetailsCard
            timeFrame="06.00 AM - 08.00 AM"
            date="2024/June/13"
            hallNumber="HALL - A"
            status="Not Started Yet"
            doctorName="Dr. Nishantha Perera"
            doctorEducation="MBBS (COL) specialized in cardiology"
            doctorImg={doctorImg}
            sessionId="#"
            clickable={false}
          />
          <MCSOnGoingSessionDetailsCard
            timeFrame="06.00 AM - 08.00 AM"
            date="2024/June/13"
            hallNumber="HALL - A"
            status="Not Started Yet"
            doctorName="Dr. Nishantha Perera"
            doctorEducation="MBBS (COL) specialized in cardiology"
            doctorImg={doctorImg}
            sessionId="#"
            clickable={false}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffUpcomingSessionPage;
