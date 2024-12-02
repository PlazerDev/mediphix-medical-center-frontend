import { useState } from "react";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import Loading from "../../components/Loading";
import Footer from "../../components/Footer";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import { SessionService } from "../../services/mca/SessionService";
import CardTitleAndValue from "../../components/CardTitleAndValue";
import { Link } from "react-router-dom";
import { Button, DatePicker, Space } from "antd";
import { MdDangerous, MdDeleteForever } from "react-icons/md";
const { RangePicker } = DatePicker;

function MCAUpcommingSessionPage() {
  const [loading, setLoading] = useState(false);
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
      link: "/medicalCenterAdmin/sessions/upcommingSessions",
    },
    {
      title: "Session Details",
      link: "",
    },
  ];

  const data = SessionService.getSampleSessionData();
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      {!loading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title="Session Details"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName="Nawaloka Hospital"
          />
          {/* Main Body div */}
          <div>
            {/* Basic Details  */}
            <div className="bg-mediphix_card_background p-8 rounded-lg">
              <p className="font-bold  mb-1">Details of the Clinic Session</p>
              <div className="flex justify-center">
                <CardTitleAndValue
                  title="Time Frame"
                  value={data.startTime + " - " + data.endTime}
                />
                <CardTitleAndValue title="Date" value={data.date} />
                <CardTitleAndValue
                  title="Appointment Categories"
                  value={data.appointmentCategories.join(", ")}
                />
              </div>
              <p className="font-bold mb-1 mt-4">Doctor Details</p>
              <div>
                <div className="flex-1">
                  <p className="text-mediphix_text_c text-sm">Name</p>
                  <Link to={"/custome/" + data.doctorDetails.id}>
                    <p>{data.doctorDetails.name}</p>
                  </Link>
                </div>
              </div>
              <p className="font-bold mb-1 mt-4">Additional Details</p>
              <div>
                <CardTitleAndValue
                  title="Note from the doctor"
                  value={data.noteFromDoctor}
                />
                <CardTitleAndValue
                  title="Note from the medical center"
                  value={data.noteFromMedicalCenter}
                />
              </div>
            </div>
            {/* Slot Details  */}
            <div className="bg-mediphix_card_background p-8 rounded-lg mt-4">
              <p className="font-bold mb-2">Time Slot Details</p>
              <div className="flex flex-col gap-2">
                {data.timeSlotDetails.map((item) => (
                  <div className="p-2 border border-mediphix_text_d rounded-lg flex justify-between">
                    <CardTitleAndValue
                      title="Start Time & End Time"
                      value={item.startTime + " - " + item.endTime}
                    />
                    <CardTitleAndValue
                      title="Maximum Number of Patients"
                      value={item.maxPatients}
                    />
                    <div className="flex-1">
                      <p className="text-mediphix_text_c text-sm">
                        Current Last Queue Number
                      </p>
                      <p className="bg-mediphix_text_c text-mediphix_card_background w-12 text-center px-2 rounded-full ">
                        {item.currLastPatientNumber}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Temporary Close the session  */}
            <div className="bg-mediphix_card_background p-8 rounded-lg mt-4">
              <p className="font-bold">Temporary close the clinic session</p>
              <p className="mb-2">Enter start date and the end date</p>
              <div className="flex justify-between items-center">
                <RangePicker size="large" />
                <button className="px-4 py-2 bg-[#fb2b2b] hover:bg-[#ff4646]  text-white rounded-lg">
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <MdDangerous className="text-xl" />
                    </div>
                    <div>Close Temporary</div>
                  </div>
                </button>
              </div>
            </div>
            {/* Delete the session  */}
            <div className="bg-[#ff3c3c] p-8 rounded-lg mt-4 text-white">
              <p className="font-bold">Delete the clinic session</p>
              <p className="mb-2">
                If you proceed, the session will be deleted, and patients will
                be notified. This action cannot be undone.
              </p>
              <div className="flex justify-between items-center">
                <button className="px-4 py-2 bg-[#ffffff] hover:bg-[#ececec]  text-black rounded-lg">
                  <div className="flex items-center justify-center gap-2">
                    <div>
                      <MdDeleteForever className="text-xl" />
                    </div>
                    <div>Delete the Session</div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCAUpcommingSessionPage;
