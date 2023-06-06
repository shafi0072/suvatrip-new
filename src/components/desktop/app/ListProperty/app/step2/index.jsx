import React from "react";
import AddImage from "./AddImage";

const index = ({
  handleApiOnSubmit,
  progress2,
  setProgress2,
  uploadedFiles,
  setUploadedFiles,
  user_id,
}) => {
  return (
    <div>
      {progress2 === 10 && progress2 < 50 && (
        <AddImage
          handleApiOnSubmit={handleApiOnSubmit}
          user_id={user_id}
          uploadedFiles={uploadedFiles}
          setUploadedFiles={setUploadedFiles}
          progress2={progress2}
          setProgress2={setProgress2}
        />
      )}
    </div>
  );
};

export default index;
