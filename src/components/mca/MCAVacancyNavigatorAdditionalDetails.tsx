import { Input, Select } from "antd";
import { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";
import NormalButtonWithFunction from "../NormalButtonWithFunction";
import Swal from "sweetalert2";

const MAX_COUNT = 3;

type additionalData = {
  aptCategories: string[];
  noteForDoctors: string;
  contactNumber: string;
};

interface Props {
  additionalDataObj: additionalData;
  setAdditionalDataObj: React.Dispatch<React.SetStateAction<additionalData>>;
  setCurrent: (value: number) => void;
  setIs2Complete: (value: boolean) => void;
}

function MCAVacancyNavigatorAdditionalDetails({
  additionalDataObj,
  setAdditionalDataObj,
  setCurrent,
  setIs2Complete,
}: Props) {
  const [aptCategories, setAptCategories] = useState<string[]>(
    additionalDataObj.aptCategories || []
  );
  const [noteForDoctors, setNoteForDoctors] = useState<string>(
    additionalDataObj.noteForDoctors || ""
  );
  const [contactNumber, setContactNumber] = useState<string>(
    additionalDataObj.contactNumber || ""
  );

  const suffix = (
    <>
      <span>
        {aptCategories.length} / {MAX_COUNT}
      </span>
      <DownOutlined />
    </>
  );

  function moveToNext() {
    if (
      aptCategories.length > 0 &&
      noteForDoctors.trim() !== "" &&
      contactNumber.trim() !== ""
    ) {
      setAdditionalDataObj({
        aptCategories,
        noteForDoctors,
        contactNumber,
      });
      setIs2Complete(true);
      setCurrent(2);
    } else {
      Swal.fire({
        title: "Complete Current Step to Proceed",
        text: "Please complete all the required actions in this step before moving to the next.",
        icon: "warning",
        confirmButtonColor: "#FF7300",
      });
    }
  }

  return (
    <div>
      <div className="bg-mediphix_card_background rounded-lg px-8 py-4">
        <p className="font-bold">Additional Details</p>
        <div className="flex flex-col gap-4 mt-4">
          <div className="flex flex-row justify-between gap-4">
            <div className="flex flex-col flex-1">
              <p>Appointment Category</p>
              <Select
                mode="multiple"
                maxTagCount={MAX_COUNT}
                value={aptCategories}
                onChange={(values) => setAptCategories(values)}
                suffixIcon={suffix}
                placeholder="Please select one or more categories"
                options={[
                  { value: "OPD", label: "OPD" },
                  { value: "GENERAL_MEDICINE", label: "General Medicine" },
                  { value: "CARDIOLOGY", label: "Cardiology" },
                  { value: "ORTHOPEDICS", label: "Orthopedics" },
                  { value: "PEDIATRICS", label: "Pediatrics" },
                  {
                    value: "GYNECOLOGY_OBSTETRICS",
                    label: "Gynecology & Obstetrics",
                  },
                  { value: "DERMATOLOGY", label: "Dermatology" },
                  { value: "ENT", label: "ENT" },
                  { value: "NEUROLOGY", label: "Neurology" },
                  { value: "GASTROENTEROLOGY", label: "Gastroenterology" },
                  { value: "PULMONOLOGY", label: "Pulmonology" },
                  { value: "ONCOLOGY", label: "Oncology" },
                  { value: "ENDOCRINOLOGY", label: "Endocrinology" },
                  { value: "NEPHROLOGY", label: "Nephrology" },
                  { value: "UROLOGY", label: "Urology" },
                  {
                    value: "PSYCHIATRY_MENTAL_HEALTH",
                    label: "Psychiatry & Mental Health",
                  },
                  { value: "OPHTHALMOLOGY", label: "Ophthalmology" },
                  { value: "DENTISTRY", label: "Dentistry" },
                  {
                    value: "PHYSICAL_THERAPY_REHABILITATION",
                    label: "Physical Therapy & Rehabilitation",
                  },
                  {
                    value: "ALLERGY_IMMUNOLOGY",
                    label: "Allergy & Immunology",
                  },
                  { value: "RADIOLOGY", label: "Radiology" },
                  { value: "GERIATRICS", label: "Geriatrics" },
                  { value: "EMERGENCY_MEDICINE", label: "Emergency Medicine" },
                  {
                    value: "OCCUPATIONAL_HEALTH",
                    label: "Occupational Health"
                  }
                ]}
              />
            </div>
            <div className="flex flex-col w-60 flex-1">
              <p>Contact Number</p>
              <Input
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                type="tel"
                addonBefore="+94"
                placeholder="Enter your contact number"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <p>Note for doctors</p>
            <TextArea
              required
              showCount
              maxLength={300}
              onChange={(e) => setNoteForDoctors(e.target.value)}
              value={noteForDoctors}
              placeholder="Add your note about the vacancy for doctors"
              style={{ height: 120, resize: "none" }}
            />
          </div>
        </div>
        <div className="flex flex-row justify-end mt-8">
          <NormalButtonWithFunction
            colorType={2}
            handler={moveToNext}
            title="Move to next step"
          />
        </div>
      </div>
    </div>
  );
}

export default MCAVacancyNavigatorAdditionalDetails;
