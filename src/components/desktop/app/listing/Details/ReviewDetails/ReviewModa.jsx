import {
  Box,
  Button,
  Divider,
  Modal,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import StarIcon from "@mui/icons-material/Star";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ReviewModa = () => {
  const [review, setReview] = useState("");
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState(0);
  const [faciValue, setFaciValue] = useState(0);
  const [hoverFaci, setHoverFaci] = useState(-1);
  const [hover, setHover] = React.useState(-1);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  const handelReview = () => {
    console.log(review);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h4" textAlign="center">
            Review
          </Typography>
          <Divider className="bg-black" />
          <Box
            marginTop="5px"
            display="flex"
            flexDirection="column"
            height="auto"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="body1">Room Service</Typography>

            <Box display="flex">
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
          </Box>
          {/* <Divider className="bg-black" /> */}
          <Box
            marginTop="5px"
            display="flex"
            flexDirection="column"
            height="auto"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="body1">Facelities</Typography>
            <Box display="flex">
              <Rating
                name="hover-feedback"
                value={faciValue}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setFaciValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHoverFaci(newHover);
                }}
                emptyIcon={
                  <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                }
              />
              {faciValue !== null && (
                <Box sx={{ ml: 2 }}>
                  {labels[hoverFaci !== -1 ? hoverFaci : faciValue]}
                </Box>
              )}
            </Box>
          </Box>

          <Divider className="bg-black" />

          <Box marginTop="15px">
            <TextField
              fullWidth
              id="standard-multiline-flexible"
              label="Text Review"
              multiline
              maxRows={4}
              variant="outlined"
              onBlur={(e) => setReview(e.target.value)}
            />

            <Button
              variant="outlined"
              style={{
                marginTop: "4px",
                position: "relative",
                left: "110px",
              }}
              onClick={handelReview}
            >
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default ReviewModa;
