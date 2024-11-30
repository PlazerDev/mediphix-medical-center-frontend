import noDataImg from "./../../assets/images/mcr/nodata.png";

function MCRCreateAppointmentNoData() {
  return (
    <div className="bg-mediphix_card_background mt-4 p-8 rounded-lg flex flex-col justify-center items-center">
      <img src={noDataImg} alt="Empty Data" className="w-60" />
      <p className="font-bold">No Appointments Found</p>
      <p className="mt-2">
        Try adjusting your search criteria or check back later for available
        appointments.
      </p>
    </div>
  );
}

export default MCRCreateAppointmentNoData;
