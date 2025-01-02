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

   function handlePrevious() {

      setCurSlide(curSlide === 0 ? images.length - 1 : curSlide - 1);

   };

   function handleNext() {
      
      setCurSlide(curSlide === images.length - 1 ? 0 : curSlide + 1);

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

         <div className="relative flex justify-center items-center gap-5 w-1/2">

            <BsArrowLeftCircleFill className="absolute left-4 drop-shadow-lg text-white cursor-pointer" size={40} onClick={handlePrevious}/>

            {
               images && images.length ?

                  images.map((image, index) => 

                     <img className={`rounded-lg shadow-lg hover:shadow-red-300 w-100' ${curSlide === index ? '' : 'hidden'}`} key={image.id} src={image.download_url} alt={image.download_url} />

                  ) :

                  null
            }

            <BsArrowRightCircleFill className="absolute right-4 drop-shadow-lg text-white cursor-pointer" size={40} onClick={handleNext}/>

            <span className="absolute bottom-4 flex gap-2">
               {
                  images && images.length ?

                     images.map((_, index) => 

                        <button className="bg-white hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow" key={index}>{ index }</button>

                     ) :

                     null
               }
            </span>

         </div>

      </section>
   );
}