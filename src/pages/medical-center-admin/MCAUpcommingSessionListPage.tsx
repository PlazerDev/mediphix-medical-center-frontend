import { useState } from "react";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCACustomDropDown from "../../components/mca/MCACustomDropDown";
import MCSCalender from "../../components/mcs/MCSCalender";
import MCSSelectedDate from "../../components/mcs/MCSSelectedDate";
import dayjs from "dayjs";
import MCASessionCard from "../../components/mca/MCASessionCard";

const appointmentCategories = [
  {
    value: "opd",
    label: "OPD",
  },
  {
    value: "dental",
    label: "Dental",
  },
  {
    value: "mental_health",
    label: "Mental Health",
  },
  {
    value: "pediatrics",
    label: "Pediatrics",
  },
  {
    value: "cardiology",
    label: "Cardiology",
  },
];

const doctors = [
  {
    value: "doc001",
    label: "Dr. Ananda Perera",
  },
  {
    value: "doc002",
    label: "Dr. Malini Fernando",
  },
  {
    value: "doc003",
    label: "Dr. Sunil Wijesekara",
  },
  {
    value: "doc004",
    label: "Dr. Nuwan Abeysekara",
  },
  {
    value: "doc005",
    label: "Dr. Lakmini Jayasuriya",
  },
  {
    value: "doc006",
    label: "Dr. Tharanga de Silva",
  },
  {
    value: "doc007",
    label: "Dr. Kamal Rajapaksa",
  },
  {
    value: "doc008",
    label: "Dr. Sanduni Ranatunga",
  },
  {
    value: "doc009",
    label: "Dr. Roshan Bandara",
  },
  {
    value: "doc010",
    label: "Dr. Nishantha Herath",
  },
];

function MCAUpcommingClinicSessionListPage() {
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
  const [loading, setLoading] = useState(false);

  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterAdmin",
    },
    {
      title: "Sessions",
      link: "/medicalCenterAdmin/sessions",
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
      {!loading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title="Good Evening"
            titleMemberName="Vishwa"
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div className="flex flex-row items-center gap-4 mb-4">
            <MCACustomDropDown
              titlePlaceHolder="Select Appointment Category"
              dataList={appointmentCategories}
            />
            <MCACustomDropDown
              titlePlaceHolder="Select the Doctor"
              dataList={doctors}
            />
          </div>
          <MCSCalender updateSelectedDate={updateSelectedDate} />
          <MCSSelectedDate
            day={dateComponents.day}
            weekday={dateComponents.weekday}
            monthAndYear={dateComponents.month + " " + dateComponents.year}
          />
          <MCASessionCard />
          <MCASessionCard />
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCAUpcommingClinicSessionListPage;
