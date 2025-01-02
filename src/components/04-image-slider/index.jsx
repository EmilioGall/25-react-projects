import { useEffect, useState } from "react";

export default function ImageSlider({ url, limit }) {

   const [images, setImages] = useState([]);
   const [curSlide, setCurSlide] = useState(0);
   const [errorMsg, setErrorMasg] = useState(null);
   const [loading, setLoading] = useState(false);

   async function fetchImage(getUrl) {

      try {
         setLoading(true);

         const response = await fetch(getUrl);
         const data = await response.json();

         if (data) {

            setLoading(false);

            setImages(data);

         };

      } catch (e) {

         setLoading(false);

         setErrorMasg(e.message);

      };

   };

   useEffect(() => {

      if (url !== '') {

         fetchImage(url);

      };

   }, [url]);

   if(loading) {
      <section className="h-screen w-full flex justify-center items-center gap-5 p-10 bg-blue-300">

         <h2>Loading data, please wait...</h2>

      </section>
   };

   if(errorMsg !== null) {
      <section className="h-screen w-full flex justify-center items-center gap-5 p-10 bg-blue-300">

         <h2>Error occurred</h2>

         <p>{errorMsg}</p>

      </section>
   };

   return (
      <section className="h-screen w-full flex justify-center items-center gap-5 p-10 bg-blue-300">

         <h2>Image Slider</h2>

      </section>
   );
}