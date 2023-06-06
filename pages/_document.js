import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
           <link
            href="https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJLucHtF.ttf"
            rel="preload"
            as="font"
            crossOrigin=""
          />
          <link
            href="https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFQ.ttf"
            rel="preload"
            as="font"
            crossOrigin=""
          />
          <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
          <script
            src={`https://maps.googleapis.com/maps/api/js?key=AIzaSyBi5Bq8YbATnUhPpwQdhtENLTQQROVV6N0&libraries=places`}
          />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script src="https://cdn.tailwindcss.com"></script>
      </body>
    </Html>
  )
}
