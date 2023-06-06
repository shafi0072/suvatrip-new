import React from "react";
import Categories from "./Categories";
import Filter from "./Filter";
import Review from "./Review";
import WriteReview from "./WriteReview";

const index = () => {
  return (
    <div className="container my-4">
      <WriteReview />
      <Categories />
      <Filter />
      <Review />
    </div>
  );
};

export default index;
