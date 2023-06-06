import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { baseUrl } from "@/src/config/serverConfig";
import Swal from "sweetalert2";
function generateBookingId(hotelName, arrayLength) {
  var uniqueId = Math.random().toString(36).substr(2, 9);
  var bookingId = `suvatript-Hotel-${hotelName}-${arrayLength}-${uniqueId}`;
  bookingId = bookingId.replace(/\s/g, ""); // Remove all spaces
  return bookingId;
}

const steps = ["Your Selection", "Final Step"];

export default function HorizontalLinearStepper({
  children,
  setBookingInfo,
  activeStep,
  setActiveStep,
  data,
  localData,
  myQuery,
  message,
  paymentOption,
  totalPrice,
}) {
  const [skipped, setSkipped] = React.useState(new Set());
  const myDiv = React.useRef(null);
  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (activeStep !== steps?.length - 1) {
      setBookingInfo(false);
      myDiv.current.scrollTop = "0%";
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    } else {
      fetch(`${baseUrl}/hotel/details/hotel/${myQuery?.hotelId}/bookings`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bookings: {
            bookingNumber: generateBookingId(
              myQuery?.NameOfProperty,
              myQuery?.currentLength
            ),
            userName: data?.fullName,
            hotelName: myQuery?.NameOfProperty,
            check_in: localData?.startDate,
            checkout: localData?.endDate,
            RoomName: myQuery?.roomName,
            RoomId: myQuery?.roomId,
            priceCategory: myQuery?.priceId,
            phone: data?.phone,
            email: data?.email,
            message: message,
            totalCost: totalPrice,
            paymentType: paymentOption,
            images: myQuery?.roomImage,
            country: data?.country,
            guests: {
              adults: localData?.adults,
              rooms: localData?.rooms,
              age: localData?.age,
              children: localData?.children,
            },
          },
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.modifiedCount === 1) {
            Swal.fire("Booked", "successFully", "success").then((res) =>
              window.location.assign("/")
            );
          }
        })
        .catch((err) => console.log(err));
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setBookingInfo(true);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div ref={myDiv}></div>
      <Stepper activeStep={activeStep} className="container my-3">
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {children}
      <div className="container mb-3 ">
        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {activeStep !== 0 && (
                <button
                  className="custom_red_color hover:bg-red-700 text-light text-md px-4 py-2 rounded"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                >
                  Back
                </button>
              )}
              <Box sx={{ flex: "1 1 auto" }} />

              <button
                onClick={handleNext}
                className="custom_green_color hover:custom_green_color text-light text-md px-4 py-2 rounded"
              >
                {activeStep === steps.length - 1
                  ? "Finish"
                  : "Next Final Details "}
              </button>
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
