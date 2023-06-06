import { baseUrl } from "../../../../../../config/serverConfig";
import React, { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Box, Button, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import Swal from "sweetalert2";

import LinearProgress from "@mui/material/LinearProgress";

const AddImage = ({
  handleApiOnSubmit,
  user_id,
  progress2,
  setProgress2,
  enhanceData,
  setEnhanceData,
  uploadedFiles,
  setUploadedFiles,
}) => {
  const [show, setShow] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [alternativeNumber, setAlternativeNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(4);

  const handleFileSelect = (event) => {
    const files = event.target.files;
    const updatedFiles = [...uploadedFiles];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const image = new Image();
      image.src = URL.createObjectURL(file);
      image.onload = () => {
        const width = image.width;
        const height = image.height;
        console.log({ width });
        if (width === 500 && height === 400) {
          file.preview = URL.createObjectURL(file);
          updatedFiles.push(file);
        } else {
          Swal.fire(
            "Opps",
            "Image dimantion must need to be 500 x 400",
            "error"
          ).then(() => {});
        }
        // do something with the image dimensions
      };
    }
    setUploadedFiles(updatedFiles);
  };

  const handleRemoveFile = useCallback(
    (index) => {
      const newArray = [
        ...uploadedFiles.slice(0, index),
        ...uploadedFiles.slice(index + 1),
      ];
      setUploadedFiles(newArray);
    },
    [uploadedFiles]
  );

  useEffect(() => {
    setShow(true);
  }, []);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    setProgress2(100);
  };

  return (
    <div className="container mb-5" style={{ height: "65%" }}>
      <div className="row d-flex justify-content-center">
        <div className={`fade-in mt-5 col-md-6 ${show ? "is-visible" : ""}`}>
          <div className="text-center">
            <div style={{ width: "100%" }} className="border rounded p-3">
              <form className="w-full" onSubmit={(e) => handleApiOnSubmit(e)}>
                <div className="mb-6 pt-4">
                  <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                    Upload Photos
                  </label>

                  <div className="mb-8">
                    <input
                      type="file"
                      name="file"
                      id="file"
                      multiple
                      className="sr-only"
                      onChange={handleFileSelect}
                    />
                    {uploadedFiles?.length !== 4 && (
                      <label
                        for="file"
                        className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-dark p-12 text-center"
                      >
                        <div>
                          <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                            Upload at least 4 photo
                          </span>
                          <p className="text-sm mb-4">
                            You will also be able to upload more after
                            registration
                          </p>
                          <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                            Drag & Drop photo here
                          </span>
                          <span className="mb-2 block text-base font-medium text-[#6B7280]">
                            Or
                          </span>
                          <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-light bg-sky-500">
                            Add photo
                          </span>
                        </div>
                      </label>
                    )}
                  </div>

                  <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                    {!isLoading && uploadedFiles?.length !== 0 && (
                      <h1 className="text-center text-danger">
                        {uploadedFiles?.length > 0 && 4 - uploadedFiles?.length}{" "}
                        photos left
                      </h1>
                    )}

                    {isLoading && (
                      <Box sx={{ width: "100%" }}>
                        <LinearProgress />
                      </Box>
                    )}
                    {!isLoading && (
                      <div className="d-flex items-center">
                        <div className="row">
                          {uploadedFiles.map((file, index) => (
                            <div className="col-md-3 relative">
                              <div className="relative">
                                <img
                                  className={`fade-in mx-2 ${
                                    file.name ? "is-visible" : ""
                                  }`}
                                  style={{ width: "100%" }}
                                  key={file.preview}
                                  src={file.preview}
                                  alt={file.name}
                                />
                                <div className="absolute top-1 right-0 text-red-500">
                                  <CancelIcon
                                    onClick={() => handleRemoveFile(index)}
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  {/* {!isLoading && <Button
                    type="submit"
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    
                    // onClick={() => setNavigation("What’s Nearby")}
                  >
                    Send File
                  </Button>} */}
                  {isLoading && <CircularProgressWithLabel value={progress} />}
                </div>
                <div className="d-flex justify-content-between mb-2 mt-10">
                  <button
                    type="reset"
                    className="btn custom_red_color px-5 text-light"
                    onClick={() => {
                      setProgress2(0);
                      setProgress(20);
                    }}
                  >
                    Back
                  </button>
                  <button
                    disabled={uploadedFiles?.length >= 4 ? false : true}
                    type="submit"
                    className="btn custom_green_color px-5 text-light"
                  >
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export default AddImage;
