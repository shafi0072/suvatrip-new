import { Box, Modal } from "@mui/material";
import React from "react";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "#ffffff99",
  position: "relative",

  p: 4,
};

const ImageModal = ({ open, handleClose, data, imagesData }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} className={" rounded-4 p-5"}>
        <div id="carouselExampleIndicators" className="carousel slide">
          <div className="carousel-indicators ">
            {imagesData?.map((items, index) => (
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-label={`Slide ${index + 1}`}
                style={{ width: "15%" }}
              >
                <img src={items} className="d-block w-100" alt="..." />
              </button>
            ))}
          </div>
          <div className="carousel-inner">
            {imagesData?.map((items, index) => (
              <div
                className={
                  index === 0 ? "carousel-item active" : "carousel-item"
                }
              >
                <img
                  src={items}
                  className="d-block"
                  style={{ width: "100%", height: "500px" }}
                  alt="..."
                />
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default ImageModal;
