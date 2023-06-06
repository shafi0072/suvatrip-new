import React from 'react';
import Maps from '../../src/components/desktop/core/Maps'
import ListingHotel from '../../src/components/desktop/app/listing'
import { useState, useEffect } from 'react';
import { baseUrl } from '@/src/config/serverConfig';
import { useRouter } from 'next/router';
const index = ({ hotels }) => {
  const router = useRouter();
  const [hotelData, setHotelData] = useState([]);
  const { lat, lng, address, adults, rooms, children, age, checkIn, checkOut } = router.query
  const queryData = { adults, rooms, children, age, checkIn, checkOut }
  console.log(queryData)

  useEffect(() => {
    async function fetchHotels() {
      try {
        const res = await fetch(`${baseUrl}/hotel/listedData/${encodeURIComponent(address)}`);
        const data = await res.json();
        setHotelData(data);
      }
      catch (err) {
        setHotelData(hotelData);
      }
    }
    fetchHotels();

  }, [hotelData]);


  return (
    <div>
      <ListingHotel hotelData={hotelData} lat={lat} lng={lng} address={address} queryData={queryData} />
    </div>
  );
};

export async function getServerSideProps() {
  try {
    const res = await fetch(`${baseUrl}/hotel/listedData`);
    const hotels = await res.json();
    return {
      props: { hotels },
    };
  } catch (error) {
    console.log("Failed to fetch data:", error);
    return {
      props: { hotels: [] }, // Return an empty array in the props
    };
  }
}



export default index;