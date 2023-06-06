import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { baseUrl } from "@/src/config/serverConfig";
import Swal from "sweetalert2";
import { useState } from "react";

const AddImageModals = ({ open, handleClose, files, id, field }) => {
  const [isLoading, setIsLoading] = useState(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "550px",
    bgcolor: "#ffffff90",
    borderRadius: "20px",
    boxShadow: 24,
    p: 4,
  };

  console.log({ field });

  const handleUploadImage = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    files.forEach((file) => {
      formData.append("files", file);
    });
    fetch(`${baseUrl}/image/upload`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.cdnUrls?.length > 0) {
          console.log(data?.cdnUrls[0]);
          const Images = { [field]: data?.cdnUrls[0] };
          console.log(JSON.stringify(Images));
          var myHeaders = new Headers();
          myHeaders.append(
            "Authorization",
            localStorage.getItem("accessToken")
          );
          myHeaders.append("Content-Type", "application/json");
          fetch(
            `${baseUrl}/hotel/details/hotel/${id}/${field ? field : "images"}`,
            {
              method: "PUT",
              headers: myHeaders,
              body: JSON.stringify(Images),
              // redirect: 'follow'
            }
          )
            .then((res) => res.json())
            .then((data) => {
              setIsLoading(false);
              handleClose();
              Swal.fire("Good Job", `${data.message}`, "success");
            })
            .catch((err) => {
              setIsLoading(false);
              handleClose();
              Swal.fire("something went wrong", err, "error");
            });
        }
      })
      .catch((err) => Swal.fire("Opps", "Image need to be 500 x 400", "error"));
  };
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <figure class="max-w-lg">
              {files?.length > 0 && (
                <img
                  class="h-auto max-w-full rounded-lg"
                  src={URL.createObjectURL(files[0])}
                  alt="image description"
                />
              )}

              <div className="mt-3 d-flex justify-content-end">
                <button
                  className="btn custom_red_color hover:bg-red-600 text-light"
                  onClick={handleUploadImage}
                >
                  {isLoading && (
                    <>
                      {" "}
                      <svg
                        aria-hidden="true"
                        role="status"
                        class="inline w-4 h-4 mr-3 text-white animate-spin"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="#E5E7EB"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentColor"
                        />
                      </svg>
                      Loading...
                    </>
                  )}
                  {!isLoading && "Upload"}
                </button>
                <button className="btn bg-gray-500 hover:bg-gray-600 text-light ml-2">
                  cancel
                </button>
              </div>
            </figure>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default AddImageModals;
