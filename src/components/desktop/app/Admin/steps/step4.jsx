import {
  FormControl,
  FormControlLabel,
  FormGroup,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import { useState } from "react";

const Step4 = ({ setNavigation }) => {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileSelect = (event) => {
    const files = event.target.files;
    const updatedFiles = [...uploadedFiles];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      file.preview = URL.createObjectURL(file);
      updatedFiles.push(file);
    }
    setUploadedFiles(updatedFiles);
  };

  return (
    <div>
      <h1 className="text-md font-bold">Property photos</h1>
      <p className="text-sm">
        Great photos invite guests to get the full experience of your property,
        so upload some high-resolution photos that represent all your property
        has to offer. We will display these photos on your property's page on
        the Booking.com website.
      </p>

      <div className="mt-4">
        <div className="row">
          <div className="col-md-8">
            <div className="bg-gray-300 py-3 px-3 shadow-md rounded-4 my-3">
              <form className="w-full ">
                <div className="mb-6 pt-4">
                  <label className="mb-5 block text-xl font-semibold text-[#07074D]">
                    Upload File
                  </label>

                  <div className="mb-8">
                    <input
                      type="file"
                      name="file"
                      id="file"
                      className="sr-only"
                      onChange={handleFileSelect}
                    />
                    <label
                      for="file"
                      className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-dark p-12 text-center"
                    >
                      <div>
                        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
                          Upload at least 1 photo
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
                  </div>

                  {uploadedFiles.map((file) => (
                    <div className="mb-5 rounded-md bg-[#F5F7FB] py-4 px-8">
                      <div className="flex items-center justify-between">
                        <span className="truncate pr-3 text-base font-medium text-[#07074D]">
                          {file.name}
                        </span>
                        <img
                          style={{ width: "30%" }}
                          key={file.preview}
                          src={file.preview}
                          alt={file.name}
                        />
                        <button className="text-[#07074D]">
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.279337 0.279338C0.651787 -0.0931121 1.25565 -0.0931121 1.6281 0.279338L9.72066 8.3719C10.0931 8.74435 10.0931 9.34821 9.72066 9.72066C9.34821 10.0931 8.74435 10.0931 8.3719 9.72066L0.279337 1.6281C-0.0931125 1.25565 -0.0931125 0.651788 0.279337 0.279338Z"
                              fill="currentColor"
                            />
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M0.279337 9.72066C-0.0931125 9.34821 -0.0931125 8.74435 0.279337 8.3719L8.3719 0.279338C8.74435 -0.0931127 9.34821 -0.0931123 9.72066 0.279338C10.0931 0.651787 10.0931 1.25565 9.72066 1.6281L1.6281 9.72066C1.25565 10.0931 0.651787 10.0931 0.279337 9.72066Z"
                              fill="currentColor"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div>
                  <button
                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    onClick={() => setNavigation("What’s Nearby")}
                  >
                    Send File
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

export default Step4;
