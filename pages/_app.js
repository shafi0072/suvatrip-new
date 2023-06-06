import AuthContent from "@/src/store/AuthContent";
import "@/styles/globals.css";
import { ThemeProvider, useMediaQuery } from "@mui/material";
import Head from "next/head";
import Layout from "../src/components/desktop/core/Layout";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-phone-number-input/style.css";
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import '@reach/combobox/styles.css'
import '@geoapify/geocoder-autocomplete/styles/minimal.css'
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useState } from "react";


const parseJwt = (token) => {
  if (!token) {
    return null;
  }
  return JSON.parse(atob(token.split(".")[1]));
};


// const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
//   color: theme.status.danger,
//   '&.Mui-checked': {
//     color: theme.status.danger,
//   },
// }));

// const theme = createTheme({
//   status: {
//     danger: orange[500],
//   },
// });


export default function App({ Component, pageProps }) {




  


  const router = useRouter();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    const Storage = localStorage.getItem("accessToken");
    let user = JSON.stringify(Storage);
    if (user) {
      const decodedJwt = parseJwt(localStorage.getItem("accessToken"));

      if (decodedJwt) {
        if (decodedJwt.exp * 1000 < Date.now()) {
          localStorage.removeItem("accessToken");
        } else {
          setUserInfo(decodedJwt);
        }
      }
    }
  }, []);
  return (
    <>
      <Head>
        <script src="https://cdn.tailwindcss.com"></script>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
      </Head>
      <>
        {router.pathname !== '/' ? <AuthContent userInfo={userInfo} setUserInfo={setUserInfo}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AuthContent> :

          <AuthContent userInfo={userInfo} setUserInfo={setUserInfo}>

            <Component {...pageProps} />

          </AuthContent>

        }

        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossOrigin="anonymous"
        ></script>

        <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBi5Bq8YbATnUhPpwQdhtENLTQQROVV6N0&libraries=places"></script>
      </>

    </>
  );
}
