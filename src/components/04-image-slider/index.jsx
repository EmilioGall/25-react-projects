import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill, Bs1CircleFill } from 'react-icons/bs';

export default function ImageSlider({ url, page, limit }) {

   const [images, setImages] = useState([]);
   const [curSlide, setCurSlide] = useState(0);
   const [errorMsg, setErrorMasg] = useState(null);
   const [loading, setLoading] = useState(false);

   async function fetchImage(getUrl) {

      try {
         setLoading(true);

         const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
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

   if (loading) {
      <section className="h-screen w-full flex justify-center items-center gap-5 p-10 bg-blue-300">

         <h2>Loading data, please wait...</h2>

      </section>
   };

   if (errorMsg !== null) {
      <section className="h-screen w-full flex justify-center items-center gap-5 p-10 bg-blue-300">

         <h2>Error occurred</h2>

         <p>{errorMsg}</p>

      </section>
   };

   return (
      <section className="h-screen w-full flex flex-col justify-center items-center gap-5 p-10 bg-blue-300">

         <h2>Image Slider</h2>

         <div className="flex justify-center items-center gap-5">

            <BsArrowLeftCircleFill />

            {
               images && images.length ?

                  images.map(image => (

                     <img src={image.download_url} alt="" />

                  )) :

                  null
            }

            <BsArrowRightCircleFill />

            <span>
               {
                  images && images.length ?

                     images.map((_, index) => (

                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow" key={index}>{ index }</button>

                     )) :

                     null
               }
            </span>

         </div>

      </section>
   );
}