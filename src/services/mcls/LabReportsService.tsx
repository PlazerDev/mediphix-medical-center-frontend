interface LabTestTypeData {
  label: string;
  value: string;
}

interface LabReportBacklogData {
  id: string;
  referenceNumber: string;
  isUrgent: boolean;
  dateAdded: string;
  testTypes: string;
}

interface TestData {
  id: string;
  referenceNumber: string;
  testName: string;
  testTypes: string;
  isUrgent: boolean;
  requestedDate: string;
  noteFromDoctor: string;
}

interface PatientData {
  name: string;
  age: number;
}

interface DoctorData {
  name: string;
  id: string;
  supportedAppointmentCategories: string[];
}

interface ProgressData {
  testStartedDate: string;
  testEndDate: string;
}

interface LabReportData {
  testDetails: TestData;
  patientDetails: PatientData;
  doctorDetails: DoctorData;
  progressDetails: ProgressData;
}

export class LabReportsService {
  static getAllLabtestTypes(): LabTestTypeData[] {
    return [
      { label: "Microbiology", value: "MICROBIOLOGY" },
      { label: "Hematology", value: "HEMATOLOGY" },
      { label: "Pathology", value: "PATHOLOGY" },
      { label: "Biochemistry", value: "BIOCHEMISTRY" },
      { label: "Immunology", value: "IMMUNOLOGY" },
      { label: "Genetics", value: "GENETICS" },
      { label: "Cytology", value: "CYTOLOGY" },
      { label: "Virology", value: "VIROLOGY" },
      { label: "Toxicology", value: "TOXICOLOGY" },
      { label: "Parasitology", value: "PARASITOLOGY" },
      { label: "Molecular Biology", value: "MOLECULAR_BIOLOGY" },
      { label: "Endocrinology", value: "ENDOCRINOLOGY" },
      { label: "Clinical Chemistry", value: "CLINICAL_CHEMISTRY" },
    ];
  }

  // Return the list of reports in the backlog
  static getSampleReportBacklogData(): LabReportBacklogData[] {
    return [
      {
        id: "1",
        referenceNumber: "REF123456",
        isUrgent: true,
        dateAdded: "2024-11-20",
        testTypes: "HEMATOLOGY",
      },
      {
        id: "2",
        referenceNumber: "REF654321",
        isUrgent: false,
        dateAdded: "2024-11-19",
        testTypes: "BIOCHEMISTRY",
      },
      {
        id: "3",
        referenceNumber: "REF112233",
        isUrgent: true,
        dateAdded: "2024-11-18",
        testTypes: "CYTOLOGY",
      },
      {
        id: "4",
        referenceNumber: "REF998877",
        isUrgent: false,
        dateAdded: "2024-11-17",
        testTypes: "VIROLOGY",
      },
      {
        id: "5",
        referenceNumber: "REF445566",
        isUrgent: true,
        dateAdded: "2024-11-16",
        testTypes: "ENDOCRINOLOGY",
      },
    ];
  }

  // Return information of a given report which is in the backlog
  static getSampleReportInformation(id: string): LabReportData {
    let backlog = this.getSampleReportBacklogData().find(
      (report) => report.id === id
    );

    if (!backlog) {
      backlog = {
        id: "5",
        referenceNumber: "REF445566",
        isUrgent: true,
        dateAdded: "2024-11-16",
        testTypes: "ENDOCRINOLOGY",
      };
    }

    const sampleReportData: LabReportData = {
      testDetails: {
        id: backlog.id,
        referenceNumber: backlog.referenceNumber,
        testName: "Sample Test Name",
        testTypes: backlog.testTypes,
        isUrgent: backlog.isUrgent,
        requestedDate: backlog.dateAdded,
        noteFromDoctor: "This is a note from the doctor for the test.",
      },
      patientDetails: {
        name: "John Doe",
        age: 45,
      },
      doctorDetails: {
        name: "Dr. Smith",
        id: "DOC123",
        supportedAppointmentCategories: ["General", "Specialist"],
      },
      progressDetails: {
        testStartedDate: "2024-11-21",
        testEndDate: "2024-11-23",
      },
    };

    return sampleReportData;
  }
}
