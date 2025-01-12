import {
  BellOutlined,
  LogoutOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import logo from "./../../assets/images/mediphix_withoutPadding.jpg";
import { useAuthContext } from "@asgardeo/auth-react";
import Swal from "sweetalert2";

function MCSNavBar() {
  const { signOut } = useAuthContext();
  function logOutButtonHandler() {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#ff7300",
      confirmButtonText: "Yes, Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut();
        Swal.fire({
          text: "You have been successfully logged out",
          icon: "success",
          confirmButtonColor: "#ff7300",
        });
      }
    });
  }

  return (
    <div>
      <>
        <div className="flex justify-between items-center bg-white h-[85px]">
          {/* Image  */}
          <div>
            <img className="w-24 ml-8 object-contain" src={logo} alt="logo" />
          </div>
          {/* Notification Bell, Settings and Log out  */}
          <div>
            <div className="flex  my-5 mr-8 bg-[#E3E3E3] rounded-full">
              <Button
                className="custom-button"
                type="default"
                size="large"
                shape="circle"
                icon={<BellOutlined style={{ color: "#FF7300" }} />}
              />

              <Button
                className="custom-button"
                type="default"
                size="large"
                shape="circle"
                icon={<SettingOutlined style={{ color: "#FF7300" }} />}
              />

              <Button
                className="custom-button"
                type="default"
                size="large"
                shape="circle"
                onClick={logOutButtonHandler}
                icon={<LogoutOutlined style={{ color: "#FF7300" }} />}
              />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default MCSNavBar;
