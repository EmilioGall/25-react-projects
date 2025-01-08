// Import necessary hooks from React for managing component state and lifecycle
import { useEffect, useState } from "react";

// Importing icons for navigation arrows from 'react-icons'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs';

/**
 * Description: ImageSlider component renders a slider to display images fetched from a given URL.
 * @param {string} url - The URL to fetch images from.
 * @param {number} page - The current page number for pagination.
 * @param {number} limit - The number of images to fetch per page.
 */
export default function ImageSlider({ url, page, limit }) {

   // State to hold the fetched images
   const [images, setImages] = useState([]);

   // State to track the index of the current slide
   const [curSlide, setCurSlide] = useState(0);

   // State to hold error messages, if any
   const [errorMsg, setErrorMasg] = useState(null);

   // State to indicate loading status
   const [loading, setLoading] = useState(false);

   // Fetch images from the API and handle loading and error states.
   async function fetchImage(getUrl) {

      try {

         // Set loading to true before starting the fetch
         setLoading(true);

         const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
         const data = await response.json(); // Parse response as JSON

         // If data is successfully fetched, update the state
         if (data) {

            // Set loading to false
            setLoading(false);

            // Update images state with fetched data
            setImages(data);

         };

      } catch (e) {

         // Set loading to false
         setLoading(false);

         // Update error message state
         setErrorMasg(e.message);

      };

   };

   /**
    * Handle the action when the previous button is clicked.
    * Adjusts the current slide index to show the previous image.
    */
   function handlePrevious() {

      // Loop back to the last image or go to the previous image
      setCurSlide(curSlide === 0 ? images.length - 1 : curSlide - 1);

   };

   /**
    * Handle the action when the next button is clicked.
    * Adjusts the current slide index to show the next image.
    */
   function handleNext() {

      // Loop back to the first image or go to the next image
      setCurSlide(curSlide === images.length - 1 ? 0 : curSlide + 1);

   };

   /**
    * Handle the selection of a specific image slide based on its index.
    * @param {number} getSlideIndex - The index of the selected slide.
    */
   function handleSelection(getSlideIndex) {

      // Update the current slide index
      setCurSlide(getSlideIndex);

   };

   // Fetch images when the component mounts or when the URL changes
   useEffect(() => {

      // Ensure URL is not empty before fetching
      if (url !== '') {

         // Call fetchImage function with provided URL
         fetchImage(url);

      };

   }, [url]); // Dependency on url means this effect runs when url changes

   // If loading, display a loading message
   if (loading) {
      <section className="h-screen w-full flex justify-center items-center gap-5 p-10 bg-blue-300">

         <h2>Loading data, please wait...</h2>

      </section>
   };

   // If there's an error in fetching data, display an error message
   if (errorMsg !== null) {
      <section className="h-screen w-full flex justify-center items-center gap-5 p-10 bg-blue-300">

         <h2>Error occurred</h2>

         {/* Show detailed error message */}
         <p>{errorMsg}</p>

      </section>
   };

   return (

      // Main section of the image slider component
      <section id="image-slider" className="relative h-screen w-full flex flex-col justify-center items-center gap-5 font-mono bg-blue-300">

         {/* Image Slider component Title */}
         <h2 className="relative text-4xl text-center font-bold">Image Slider</h2>

         <div className="relative flex justify-center items-center w-11/12 lg:w-9/12 xl:w-7/12 bg-blue-600 rounded-xl">

            {/* Left arrow button for navigating to the previous image */}
            <BsArrowLeftCircleFill className="absolute left-4 drop-shadow-xl shadow-blue-500 text-white cursor-pointer" size={40} onClick={handlePrevious} />

            {
               images && images.length ?

                  // Map over images to create img elements
                  images.map((image, index) =>

                     <img
                        className={`rounded-xl shadow-lg shadow-blue-500 object-cover h-full w-full ${curSlide === index ? '' : 'hidden'}`}
                        key={image.id} // Use image id as the key for performance
                        src={image.download_url} // Use image download URL as the source
                        alt={image.download_url} // Provide an alt attribute
                     />

                  ) :

                  null
            }

            {/* Right arrow button for navigating to the next image */}
            <BsArrowRightCircleFill className="absolute right-4 drop-shadow-xl text-white cursor-pointer" size={40} onClick={handleNext} />

            {/* Render indicator buttons for each image at the bottom */}
            <span className="absolute bottom-4 flex gap-2">
               {
                  // Check if images are available
                  images && images.length ?

                     // Create button for each image
                     images.map((_, index) =>

                        <button
                           className={`${curSlide === index ? 'bg-blue-600 text-white hover:bg-blue-800' : 'bg-white text-gray-800 hover:bg-gray-300'} font-semibold size-6 lg:size-8 xl:size-10 aspect-square border border-gray-400 rounded-full shadow`}
                           key={index} // Use index as the key for matchability
                           onClick={() => handleSelection(index)}> // On click, update the current slide

                           {index + 1} {/* Button text showing the slide number */}

                        </button>

                     ) :

                     // Render nothing if no images
                     null
               }
            </span>

         </div>

      </section>
   );
}