import { all_cat } from "@/src/constant/Listing/AllCategroy";
import { Box, Modal, Tab, Tabs, Typography } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Carousel from "react-material-ui-carousel";
import React, { useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1000,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ImageGalary = ({ hotelDetails }) => {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(0);
  const [img, setImg] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className="overflow-hidden text-neutral-700 mt-3">
      <div
        onClick={handleOpen}
        className="container mx-auto px-1 py-2 lg:px-32 lg:pt-12 relative"
      >
        {/* <div className="row">
          {hotelDetails?.images?.map((items, index) => (
            <div className="col-md-3">
              <div className="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  className="block h-full w-full rounded-lg object-cover object-center"
                  src={items}
                />
              </div>
            </div>
          ))}
        </div> */}
        <div className="row">
          <div className="col-md-4 mt-3">
            <img
              alt="gallery"
              className="block h-300 w-full rounded object-cover object-center"
              src={hotelDetails?.images?.length > 0 && hotelDetails?.images[0]}
            />
          </div>
          <div className="col-md-8">
            <div className="row">
              {hotelDetails?.images?.slice(0, 8).map((items, index) => (
                <div className="col-md-3 mt-3">
                  {index <= 8 && (
                    <img
                      alt="gallery"
                      className="block h-full w-full rounded object-cover object-center"
                      src={items}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-10 left-5">
          <h1 className="text-sm text-light ">
            View All Images({hotelDetails?.images?.length})
          </h1>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Carousel>
            {hotelDetails?.images?.map((image, i) => (
              <Box key={i}>
                <img
                  src={Boolean(img) ? img : image}
                  style={{ width: "100%", height: "400px" }}
                />
              </Box>
            ))}
          </Carousel>

          {/* Tab */}
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab defaultChecked label="ALL" value="1" />
                  <Tab label="Hotel" value="2" />
                  <Tab label="Facilities" value="3" />
                  <Tab label="Rooms" value="4" />
                  <Tab label="Dining" value="5" />
                  <Tab label="Others" value="6" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <Box display="flex" justifyContent="center">
                  {hotelDetails?.images?.map((image, i) => (
                    <img
                      className="w-20 mr-1"
                      key={i}
                      src={image}
                      onClick={() => setImg(image)}
                    />
                  ))}
                </Box>
              </TabPanel>
              <TabPanel value="2">
                <Box display="flex" justifyContent="center">
                  {hotelDetails?.HotelImages?.map((image, i) => (
                    <img
                      className="w-20 mr-1"
                      key={i}
                      src={image}
                      onClick={() => setImg(image)}
                    />
                  ))}
                </Box>
              </TabPanel>
              <TabPanel value="3">
                <Box display="flex" justifyContent="center">
                  {hotelDetails?.FacilityImages?.map((image, i) => (
                    <img
                      className="w-20 mr-1"
                      key={i}
                      src={image}
                      onClick={() => setImg(image)}
                    />
                  ))}
                </Box>
              </TabPanel>
              <TabPanel value="4">
                <Box display="flex" justifyContent="center">
                  {hotelDetails?.RoomsImages?.map((image, i) => (
                    <img
                      className="w-20 mr-1"
                      key={i}
                      src={image}
                      onClick={() => setImg(image)}
                    />
                  ))}
                </Box>
              </TabPanel>
              <TabPanel value="5">
                <Box display="flex" justifyContent="center">
                  {hotelDetails?.DiningImages?.map((image, i) => (
                    <img
                      className="w-20 mr-1"
                      key={i}
                      src={image}
                      onClick={() => setImg(image)}
                    />
                  ))}
                </Box>
              </TabPanel>
              <TabPanel value="6">
                <Box display="flex" justifyContent="center">
                  {hotelDetails?.otherImages?.map((image, i) => (
                    <img
                      className="w-20 mr-1"
                      key={i}
                      src={image}
                      onClick={() => setImg(image)}
                    />
                  ))}
                </Box>
              </TabPanel>
            </TabContext>
          </Box>
        </Box>
      </Modal>
    </section>
  );
};

export default ImageGalary;
