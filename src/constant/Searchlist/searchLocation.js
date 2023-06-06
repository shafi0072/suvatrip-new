import { baseUrl } from "@/src/config/serverConfig";

const cities = [];

fetch(`${baseUrl}/hotel/listedData`)
  .then((res) => res.json())
  .then((data) => {
    if (data?.length > 0) {
      for (let i = 0; i < data?.length; i++) {
        const cityExample = `${data[i]?.City}, ${data[i]?.Country}`;
        cities.push(cityExample);
      }
    }
  })
  .catch((err) => console.log(err));

const uniqueArray = Array.from(new Set(cities));

export default cities;
