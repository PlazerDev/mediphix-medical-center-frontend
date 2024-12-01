import React, { useState } from "react";
import { InboxOutlined } from "@ant-design/icons";
import { Upload, message } from "antd";
import type { UploadFile, UploadProps } from "antd";

const { Dragger } = Upload;

function FileUpload() {
  const uploadPropsFront: UploadProps = {
    name: "file",
    multiple: false,
    action: "https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",
    onChange(info) {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} front side uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} front side upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped front ID files", e.dataTransfer.files);
    },
  };

  // const handleSubmit = () => {
  //   if (!frontID || !backID) {
  //     message.error("Both front and back sides of the ID must be uploaded.");
  //     return;
  //   }

  //   const requestBody = {
  //     frontID: frontID.response?.url, // Assuming the API response contains a file URL
  //     backID: backID.response?.url,
  //   };

  //   console.log("Data to send to backend:", requestBody);

  //   // Here you can make an API call to submit the `requestBody`
  // };

  return (
    <div className="flex justify-between gap-4 mb-12">
      {/* Front ID Uploader */}
      <div className="flex-1">
        <p className="text-mediphix_text_c">
          Upload the registration files here
        </p>
        <Dragger {...uploadPropsFront}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">
            Click or drag file to this area to upload
          </p>
          <p className="ant-upload-hint">Upload the registration files here.</p>
        </Dragger>
      </div>
    </div>
  );
}

export default FileUpload;
