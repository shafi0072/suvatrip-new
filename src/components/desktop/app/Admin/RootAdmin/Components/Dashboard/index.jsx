
import dynamic from 'next/dynamic';
import React from 'react';
import Cancelation from './Cancelation';
import DeliveryType from './DeliveryType';
import NewArrived from './NewArrived';
import NewBook from './NewBook';
import Report from './Report';
import SellVolume from './SellVolume';
const UserCountry = dynamic(() => import('./UserCountry'), {
  ssr: false,
});

const index = () => {
  return (
    <div className='row'>
      <div className="col-md-6">
        <Report/>
      </div>
      <div className="col-md-6">
        <DeliveryType/>
      </div>
      <div className="col-md-6 my-3">
        <Cancelation/>
      </div>
      <div className="col-md-6 my-3">
        <UserCountry/>
      </div>
      <div className="col-md-6 my-3">
        <SellVolume/>
      </div>
      <div className="col-md-6 my-3">
        <NewBook/>
      </div>
      <div className="col-md-6 my-3">
        <NewArrived/>
      </div>
    </div>
  );
};

export default index;