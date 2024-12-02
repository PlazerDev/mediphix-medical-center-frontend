import CardTitleAndValue from "../CardTitleAndValue";
import NormalButtonWithFunction from "../NormalButtonWithFunction";

type vacancyData = {
  mainRangeStartDate: string;
  mainRangeEndDate: string;
  selectedDate: string;
  repeatDays: string[];
  subRangeEndDate: string;
  startTime: String;
  endTime: String;
};

type additionalData = {
  aptCategories: string[];
  noteForDoctors: string;
  contactNumber: string;
};

interface Props {
  vacancyDataList: vacancyData[];
  additionalDataObj: additionalData;
}
function MCAVacancyNavigatorPreview({
  vacancyDataList,
  additionalDataObj,
}: Props) {
  return (
    <div>
      <div className="bg-mediphix_card_background rounded-lg px-8 py-4">
        <p className="font-bold">Additional Details</p>
        <div className="flex flex-row items-center justify-between mt-4">
          <CardTitleAndValue
            title="Appointment Category"
            value={additionalDataObj.aptCategories.join(", ")}
          />
          <CardTitleAndValue
            title="Contact Number"
            value={"(+94) " + additionalDataObj.contactNumber}
          />
        </div>
        <div className="mt-2">
          <CardTitleAndValue
            title="Note for the doctors"
            value={additionalDataObj.noteForDoctors}
          />
        </div>
      </div>
      <div className="bg-mediphix_card_background rounded-lg px-8 py-4 mt-4">
        <p className="font-bold">Date & Time Details</p>
        <div className="mt-4 flex flex-col gap-4">
          {vacancyDataList.map((dataObj, index) => {
            return (
              <div className="flex flex-row gap-1 border-2 border-mediphix_text_d p-4 rounded-lg items-center">
                <CardTitleAndValue
                  title={"Start Time & End Time"}
                  value={"From " + dataObj.startTime + " to " + dataObj.endTime}
                />
                <CardTitleAndValue
                  title={"Start Date & End Date"}
                  value={
                    "From " +
                    dataObj.mainRangeStartDate +
                    " to " +
                    dataObj.mainRangeEndDate
                  }
                />
                <CardTitleAndValue
                  title={"Repetition (Weekly)"}
                  value={
                    dataObj.repeatDays.length !== 0
                      ? dataObj.repeatDays
                          .map((day) => day.toUpperCase())
                          .join(", ")
                      : "No Repetition, " + dataObj.selectedDate + " once"
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-4 flex flex-row justify-end">
        <NormalButtonWithFunction
          colorType={2}
          title="Confirm & Submit"
          handler={() => {}}
        />
      </div>
    </div>
  );
}

export default MCAVacancyNavigatorPreview;
