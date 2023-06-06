import React from "react";
import AreaChart from '../core/AreaChart'

const DeliveryType = () => {
 
  return (
    <div className=" text-dark shadow-md bg-gray-900 border-2 border-gray-300 rounded-4 p-3">
      <div className="d-flex justify-content-between align-items-center text-light">
        <div className="mb-2">
          <h1 className="text-md font-bold">Complete</h1>
          <p className="text-sm
          ">Displays weekly</p>
        </div>
      </div>
      <div className="">
      <AreaChart />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  
  return {
    props: { data },
  };
}




export default DeliveryType;