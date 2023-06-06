import React from "react";
import { useCallback } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box } from "@mui/material";
const Layout = ({
  progress1,
  setProgress1,
  progress2,
  setProgress2,
  progress3,
  setProgress3,
  children,
  handleSubmit,
}) => {
  const handleProgressNext = useCallback(() => {
    if (progress1 < 100) {
      setProgress1(progress1 + 20);
    }
    if (progress1 === 100 && progress2 < 100) {
      setProgress2(progress2 + 20);
    }
    if (progress1 === 100 && progress2 === 100 && progress3 < 100) {
      setProgress3(progress3 + 50);
    }
  }, [progress1, progress2, progress3]);
  const handleProgressBack = useCallback(() => {
    if (progress1 >= 20 && progress2 === 0 && progress3 === 0) {
      setProgress1(progress1 - 20);
    }
    if (progress2 >= 20 && progress1 === 100 && progress3 === 0) {
      setProgress2(progress2 - 20);
    }
    if (progress3 >= 20 && progress1 === 100 && progress2 === 100) {
      setProgress3(progress3 - 50);
    }
  }, [progress1, progress2, progress3]);
  return (
    <div>
      {children}
      {/* <div className="">
      <LinearProgress variant="determinate" value={progress} />
      
      </div>
      <div>
      <LinearProgress variant="determinate" value={progress} />
     
      </div>
      <div>
      <LinearProgress variant="determinate" value={progress} />
      </div> */}
      <div className="row mx-3 my-3 relative top-100 ">
        <div className="col-md-4">
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={progress1} />
          </Box>
        </div>
        <div className="col-md-4">
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={progress2} />
          </Box>
        </div>
        <div className="col-md-4">
          <Box sx={{ width: "100%" }}>
            <LinearProgress variant="determinate" value={progress3} />
          </Box>
        </div>
        <div className="d-flex justify-content-between my-2">
          <button className="btn btn-dark" onClick={handleProgressBack}>
            Back
          </button>
          {progress3 < 100 && (
            <button className="btn btn-dark" onClick={handleProgressNext}>
              Next
            </button>
          )}

          {progress3 == 100 && (
            <button className="btn btn-dark" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
          )}
        </div>
      </div>
      {/* <Box sx={{display:'flex', justifyContent:'space-between'}}>
     
      <Box sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      <Box sx={{ width: "100%" }}>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
      </Box> */}
    </div>
  );
};

export default Layout;
