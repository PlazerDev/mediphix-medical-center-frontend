import Footer from "./../../components/Footer";
import { Divider, Pagination } from "antd";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSDateTimeTitle from "../../components/mcs/MCSDateTimeTitle";
import MCSOnGoingSessionDetailsCard from "../../components/mcs/MCSOnGoingSessionDetailsCard";
import MCSEmptyCard from "../../components/mcs/MCSEmptyCard";
import { useEffect, useState } from "react";
import { SessionService } from "../../services/mca/SessionService";
import { useAuthContext } from "@asgardeo/auth-react";
import { useLoading } from "../../contexts/LoadingContext";
import Loading from "../../components/Loading";
import { TimeService } from "../../services/TimeService";

function MedicalCenterStaffOnGoingSessionsListPage() {
  const [data, setData] = useState<any | null>(null);
  const { getAccessToken } = useAuthContext();
  const { startLoading, stopLoading, isLoading } = useLoading();

  useEffect(() => {
    startLoading();
    SessionService.getOngoingSessionList(getAccessToken, setData, stopLoading);
  }, []);

  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterStaff",
    },
    {
      title: "Ongoing Sessions",
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
          title="Ongoing Sessions"
          titleMemberName=""
          breadcrumbItems={breadcrumbItems}
          role="Medical Center Staff Member"
        />
        {/* Main Body div from here*/}
        {isLoading && (
          <div className="flex justify-center mt-32">
            <Loading />
          </div>
        )}
        {!isLoading && (
          <div>
            {data == null && <MCSEmptyCard />}
            {data && (
              <>
                <Divider>
                  <MCSDateTimeTitle />
                </Divider>
                {data.map((s: any) => (
                  <MCSOnGoingSessionDetailsCard
                    doctorImg={s.doctorDetails.profilePhoto}
                    doctorName={s.doctorDetails.name}
                    doctorEducation={s.doctorDetails.education.join(", ")}
                    timeFrame={
                      TimeService.formatTime(s.startTimestamp) +
                      " - " +
                      TimeService.formatTime(s.endTimestamp)
                    }
                    date={TimeService.formatDate(s.startTimestamp)}
                    hallNumber={s.hallNumber}
                    status={s.overallSessionStatus}
                    sessionId={s._id}
                  />
                ))}

                {/* <Pagination defaultCurrent={1} total={20} className="text-end" /> */}
              </>
            )}
          </div>
        )}
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MedicalCenterStaffOnGoingSessionsListPage;
