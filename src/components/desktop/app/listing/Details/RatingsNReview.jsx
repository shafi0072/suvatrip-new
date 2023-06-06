import { baseUrl } from "@/src/config/serverConfig";
import { Checkbox } from "@mui/material";
import React, { useEffect, useState } from "react";
const RatingsNReview = ({ hotelDetails }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/hotel/listedData`)
      .then((res) => res.json())
      .then((data) => {
        let relaventHotels = [];
        for (let i = 0; i < data?.length; i++) {
          if (
            data[i]?.City === hotelDetails?.City ||
            data[i]?.Country === hotelDetails?.Country
          ) {
            relaventHotels.push(data[i]);
          }
        }
        setData(relaventHotels);
      })
      .catch((err) => console.log(err));
  }, [data]);
  return (
    <div>
      <h1 className="text-xl font-bold text-center">Relavent Hotels </h1>
      <div className="row mt-2">
        {data?.slice(0, 3)?.map((items) => (
          <div className="col-md-4">
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <img
                class="w-full"
                src={items?.images[0]}
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">
                  {items?.NameOfProperty}
                </div>
                <p class="text-gray-700 text-base">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus quia, nulla! Maiores et perferendis eaque,
                  exercitationem praesentium nihil.
                </p>
              </div>
              <div class="px-6 pt-4 pb-2">
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #photography
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #travel
                </span>
                <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #winter
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RatingsNReview;
