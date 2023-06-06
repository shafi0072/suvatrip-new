import { body_array, body_data } from "@/src/constant/body/body_data";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import { Height } from "@mui/icons-material";
import screenSize from "@/src/components/desktop/core/lib/MediaQuery/ScreenSize";

const BrowseByPropertyType = () => {
  const Item = styled(Paper)(({ items }) => ({
    backgroundImage: `linear-gradient(rgb(0 0 0 / 49%), rgb(0 0 0 / 69%)), url(${items?.image})`,
    backgroundPosition: "center center",
    overflow: "hidden",
    height: "300px",
  }));
  const [show, setShow] = useState(false);
  return (
    <div className="mt-5">
      <h1 className="text-3xl font-bold text-center mb-3">
        {body_data.heading2}
      </h1>
      <Box
        display={screenSize("500px") ? false : "grid"}
        gridTemplateColumns={`repeat(${screenSize("600px") ? 1 : 12}, 1fr)`}
        gap={2}
      >
        {body_array.map((items, index) => (
          <Box
            className={screenSize("500px") ? "my-3" : ""}
            gridColumn={`span ${items.span}`}
          >
            <Item items={items}>
              <div className="bottom-80 top-0">
                <h1 className="text-3xl font-bold text-light p-5">
                  {items.title}
                </h1>
              </div>
              <button className=" btn btn-secondary mx-5">Learn More</button>
            </Item>
          </Box>
        ))}
      </Box>
    </div>
  );
};

export default BrowseByPropertyType;
