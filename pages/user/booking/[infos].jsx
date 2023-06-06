import HorizontalLinearStepper from '@/src/components/desktop/core/stepper';
import React from 'react';
import { useState } from 'react';
import BookingInfo from '../../../src/components/desktop/app/BookingDetails/BookingInfo'
import BookingPaymentInfo from '../../../src/components/desktop/app/BookingDetails/BookingPayment'
import ConfirmBooking from '../../../src/components/desktop/app/BookingDetails/ConfirmBooking'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import moment from 'moment/moment';
import { useContext } from 'react';
import { UserContent } from '@/src/store/AuthContent';
import AuthModal from '@/src/components/desktop/core/modal/AuthModa';


const parseJwt = (token) => {
  if (!token) {
    return null;
  }
  return JSON.parse(atob(token.split(".")[1]));
};


const bookingInfo = () => {

  const [open, setOpen] = useState(false)
  const handleOnClose = () => setOpen(false)
  const { userInfo, setUserInfo } = useContext(UserContent);

  const router = useRouter();

  useEffect(() => {
    const Storage = localStorage.getItem("accessToken");
    let user = JSON.stringify(Storage);
    if (user) {
      const decodedJwt = parseJwt(localStorage.getItem("accessToken"));
      setUserInfo(decodedJwt);

      if (decodedJwt) {
        if (decodedJwt.exp * 1000 < Date.now()) {
          setOpen(true)
          localStorage.removeItem("accessToken");
        }
        setOpen(false)
      } else {
        setOpen(true)
      }
    } else {
      setOpen(true)
    }
  },[])
  const { hotelId, NameOfProperty, category, StreetAddress, City, Country, priceCategory, sleep, perNight, hotelImage, roomImage, roomName, priceId, roomId, vat, tax, discount, currentLength } = router.query;
  const myQuery = { hotelId, NameOfProperty, category, StreetAddress, City, Country, priceCategory, sleep, perNight, hotelImage, roomImage, roomName, roomId, priceId, vat, tax, discount, currentLength }

  
  const [bookingInfo, setBookingInfo] = useState(true)
  const [activeStep, setActiveStep] = React.useState(0);
  const [data, setData] = useState({
    fullName: userInfo?.fullName,
    email: userInfo?.email,
    phone: userInfo?.phone,
    country: 'Nepal'
  })
  const [message, setMessage] = useState('')
  const [localData, setLocalData] = useState({})
  const [paymentOption, setPaymentOption] = useState('')
  
  const [totalPrice, setTotalPrice] = useState(0)
  

  useEffect(() => {
    const localData = localStorage.getItem('checkData')
    const parseData = JSON.parse(localData)
    setLocalData(parseData)
  }, [])

  const startDate = moment(data?.startDate);
  const endDate = moment(data?.endDate);
  const nights = endDate.diff(startDate, 'days');

  

  console.log({totalPrice})

  return (
    <div>
      <HorizontalLinearStepper totalPrice={totalPrice} bookingInfo={bookingInfo} setBookingInfo={setBookingInfo} activeStep={activeStep} setActiveStep={setActiveStep} data={data} localData={localData} myQuery={myQuery} message={message} paymentOption={paymentOption}
      >
        {activeStep === 0 && <BookingInfo setTotalPrice={setTotalPrice} totalPrice={totalPrice}  myQuery={myQuery} data={data} setData={setData} localData={localData} setMessage={setMessage} message={message} setPaymentOption={setPaymentOption} userInfo={userInfo}/>}
      

        {activeStep === 1 && <ConfirmBooking/>}

        <AuthModal open={open} handleClose={handleOnClose} redirect = {'reload'}/>
      </HorizontalLinearStepper>
    </div>
  );
};

export default bookingInfo;