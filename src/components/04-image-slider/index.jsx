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

   function handleSelection(getSlideIndex) {

      setCurSlide(getSlideIndex);

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
      <section className="relative h-screen w-full flex flex-col justify-center items-center gap-5 bg-blue-300">

         <h2 className="relative text-4xl text-center font-bold">Image Slider</h2>

         <div className="relative flex justify-center items-center w-6/12 h-3/12 bg-blue-600 rounded-xl">

            <BsArrowLeftCircleFill className="absolute left-4 drop-shadow-xl shadow-blue-500 text-white cursor-pointer" size={40} onClick={handlePrevious} />

            {
               images && images.length ?

                  images.map((image, index) =>

                     <img className={`rounded-xl shadow-lg shadow-blue-500 object-cover h-full w-full ${curSlide === index ? '' : 'hidden'}`} key={image.id} src={image.download_url} alt={image.download_url} />

                  ) :

                  null
            }

            <BsArrowRightCircleFill className="absolute right-4 drop-shadow-xl text-white cursor-pointer" size={40} onClick={handleNext} />

            <span className="absolute bottom-4 flex gap-2">
               {
                  images && images.length ?

                     images.map((_, index) =>

                        <button
                           className={`${curSlide === index ? 'bg-blue-600 text-white hover:bg-blue-800' : 'bg-white text-gray-800 hover:bg-gray-300'} font-semibold size-12 aspect-square border border-gray-400 rounded-full shadow`}
                           key={index}
                           onClick={()=> handleSelection(index)}>

                           {index+1}

                        </button>

                     ) :

                     null
               }
            </span>

         </div>

      </section>
   );
}