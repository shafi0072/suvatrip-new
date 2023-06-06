import React from 'react';
import { useRouter } from 'next/router';
import ReviewDetails from '../../../src/components/desktop/app/listing/Details/ReviewDetails'
const hotelId = () => {
  const router = useRouter();
  const {hotelId} = router.query

  return (
    <div>
      <ReviewDetails/>
    </div>
  );
};

export default hotelId;