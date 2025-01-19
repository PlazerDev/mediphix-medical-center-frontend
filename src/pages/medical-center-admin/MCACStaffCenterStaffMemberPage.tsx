import { useEffect, useState } from "react";
import Footer from "../../components/Footer";
import Loading from "../../components/Loading";
import MCSMainGreeting from "../../components/mcs/MCSMainGreeting";
import MCSNavBar from "../../components/mcs/MCSNavBar";
import { StaffService } from "../../services/mca/StaffService";
import CardTitleAndValue from "../../components/CardTitleAndValue";
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  message,
  Row,
  Space,
  Tag,
  Upload,
  UploadProps,
} from "antd";
import nursesImg from "./../../assets/images/mcs/nurse.png";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import { Modal } from "antd";
import NormalButtonWithIcon from "../../components/NormalButtonWithIcon";
import { IoIosAddCircle } from "react-icons/io";
import { StorageService } from "../../services/StorageService";
import { useLoading } from "../../contexts/LoadingContext";
import { UserService } from "../../services/user/UserService";
import { useAuthContext } from "@asgardeo/auth-react";
import CustomEmpty from "../../components/CustomEmpty";

function MCACStaffCenterStaffMemberPage() {
  // setting loading
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { isLoading, startLoading, stopLoading } = useLoading();
  const [email, setEmail] = useState<string>("");
  const [form] = Form.useForm();
  const [usersData, setUsersData] = useState<any | null>(null);
  const [modelIndex, setModelIndex] = useState<number>(0);
  const { getAccessToken } = useAuthContext();

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    startLoading();
    UserService.getAllMCSmembers(getAccessToken, stopLoading, setUsersData);
  }, []);

  // setting breadcrumb
  const breadcrumbItems = [
    {
      title: "Home",
      link: "/medicalCenterAdmin",
    },
    {
      title: "Staff",
      link: "/medicalCenterAdmin/staff",
    },
    {
      title: "Medical Center Staff Member",
      link: "",
    },
  ];

  const data = StaffService.getSampleStaffMemberList(); // change here

  function cardBtnHandler() {
    showModal();
  }

  // handling form [start]

  const handleCreateMember = () => {
    form
      .validateFields()
      .then((values) => {
        console.log("Form Values:", values);
        startLoading();
        UserService.postAddNewStaffMember(values, stopLoading);
        form.resetFields();
        onClose();
      })
      .catch((info) => {
        console.error("Validation Failed:", info);
      });
  };

  const handleDiscard = () => {
    form.resetFields();
    onClose();
  };
  // handling form [end]

  // image uploading
  const props: UploadProps = {
    name: "file",
    action: `http://localhost:9000/media/upload?email=${email}&userType=mcs&uploadType=profileImage`,
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation Bar  */}
      <MCSNavBar />
      {/* Body */}
      {!isLoading && (
        <div className="flex-grow px-8">
          <MCSMainGreeting
            title="Medical Center Staff Members"
            titleMemberName=""
            breadcrumbItems={breadcrumbItems}
            role="Medical Center Admin"
            medicalCenterName={StorageService.getMedicalCenterName() || ""}
          />
          {/* Main Body div */}
          {usersData != null && (
            <Modal
              title={usersData[modelIndex].name}
              open={isModalOpen}
              onOk={handleOk}
              onCancel={handleCancel}
            >
              <div>
                <div className="flex flex-col  items-center justify-center  gap-4">
                  <div>
                    <img
                      src={usersData[modelIndex].profileImage}
                      alt="Profile Photo"
                      className="w-32 rounded-full"
                    />
                  </div>
                  <div className="flex-1  flex flex-col gap-2 w-full ">
                    <CardTitleAndValue
                      title="Employee ID"
                      value={usersData[modelIndex].empId}
                    />
                    <CardTitleAndValue
                      title="NIC"
                      value={usersData[modelIndex].nic}
                    />
                    <CardTitleAndValue
                      title="Mobile Number"
                      value={usersData[modelIndex].mobile}
                    />

                    {usersData[modelIndex].assignedSessions.length == 0 ? (
                      <Tag icon={<ExclamationCircleOutlined />} color="warning">
                        Havan't assigned to a clinic session(s)
                      </Tag>
                    ) : (
                      <Tag icon={<CheckCircleOutlined />} color="success">
                        Has assigned to a clinic session(s)
                      </Tag>
                    )}
                    <div className="flex items-center gap-2">
                      <Button>Assign a Session</Button>
                      <Button>Edit</Button>
                      <Button danger>Delete</Button>
                    </div>
                  </div>
                </div>
              </div>
            </Modal>
          )}

          {/* Drawer :: Add a new MCS Member */}
          <Drawer
            title="Add a new Medical Center Staff Member"
            onClose={onClose}
            open={open}
          >
            <Form
              form={form}
              layout="vertical"
              requiredMark={false}
              onValuesChange={(changedValues) => {
                if (changedValues.email) {
                  setEmail(changedValues.email);
                }
              }}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter the name" }]}
              >
                <Input placeholder="Enter name" />
              </Form.Item>

              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please enter the email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
              >
                <Input placeholder="Enter email" />
              </Form.Item>

              <Form.Item
                label="Mobile"
                name="mobile"
                rules={[
                  { required: true, message: "Please enter the mobile number" },
                  {
                    pattern: /^\d{10}$/,
                    message: "Please enter a valid 10-digit mobile number",
                  },
                ]}
              >
                <Input placeholder="Enter mobile number" />
              </Form.Item>

              <Form.Item
                label="NIC"
                name="nic"
                rules={[{ required: true, message: "Please enter the NIC" }]}
              >
                <Input placeholder="Enter NIC" />
              </Form.Item>

              <Form.Item
                label="Employee ID"
                name="empID"
                rules={[
                  { required: true, message: "Please enter the Employee ID" },
                ]}
              >
                <Input placeholder="Enter Employee ID" />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please enter the password" },
                ]}
              >
                <Input.Password placeholder="Enter password" />
              </Form.Item>

              <Form.Item
                label="Confirm Password"
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Please confirm the password" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("The two passwords do not match")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm password" />
              </Form.Item>

              {/* Profile photo upload ..............  */}
              <p className="mb-2">Profile Photo</p>
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
              <div className="mb-4"></div>
              {/* Profile photo upload ..............  */}

              <Space
                style={{ marginTop: "16px", justifyContent: "flex-end" }}
                size="middle"
              >
                <Button onClick={handleDiscard}>Discard</Button>
                <Button type="primary" onClick={handleCreateMember}>
                  Create Member
                </Button>
              </Space>
            </Form>
          </Drawer>
          <div className="w-96 h-12 mb-4">
            <button className="w-96 h-12" onClick={showDrawer}>
              <NormalButtonWithIcon
                buttonIcon={IoIosAddCircle}
                colorType={2}
                link=""
                title="Add a new Medical Center Staff Memeber"
              />
            </button>
          </div>

          <div className="flex items-center justify-center h-full mb-4">
            <div className="p-4 bg-mediphix_card_background rounded-s-lg flex-1 ">
              <input
                type="text"
                placeholder="Enter Employee Name"
                className="outline-none w-full"
              />
            </div>
            <div className="h-full bg-mediphix_accent py-4 px-8 rounded-e-lg hover:bg-[#ff7300] hover:cursor-pointer">
              <p className="text-white">Search</p>
            </div>
          </div>
          <Row gutter={16}>
            {usersData == null && (
              <div className="w-full">
                <CustomEmpty
                  title="No Medical Center Staff Members Found"
                  msg="Please add by clicking the 'Add a new Medical Center Staff Member'"
                />
              </div>
            )}
            {usersData != null &&
              usersData.map((item: any, index: number) => (
                <Col className="gutter-row" span={8}>
                  <div
                    className="bg-mediphix_card_background rounded-lg p-8 mb-4 h-[270px] hover:cursor-pointer hover:shadow-lg"
                    key={item.userId}
                    onClick={() => {
                      setModelIndex(index);
                      cardBtnHandler();
                    }}
                  >
                    <div className="flex items-center justify-center  gap-4">
                      <div>
                        <img
                          src={item.profileImage}
                          alt="Profile Photo"
                          className="w-32 rounded-full"
                        />
                      </div>
                      <div className="flex-1  flex flex-col gap-2">
                        <CardTitleAndValue
                          title="Employee ID"
                          value={item.empId}
                        />
                        <CardTitleAndValue title="Name" value={item.name} />
                        <CardTitleAndValue title="NIC" value={item.nic} />
                        <CardTitleAndValue
                          title="Mobile Number"
                          value={item.mobile}
                        />
                        {item.assignedSessions.length == 0 ? (
                          <Tag
                            icon={<ExclamationCircleOutlined />}
                            color="warning"
                          >
                            Havan't assigned to a clinic session(s)
                          </Tag>
                        ) : (
                          <Tag icon={<CheckCircleOutlined />} color="success">
                            Has assigned to a clinic session(s)
                          </Tag>
                        )}
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
          </Row>
        </div>
      )}
      {isLoading && <Loading />}
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default MCACStaffCenterStaffMemberPage;
