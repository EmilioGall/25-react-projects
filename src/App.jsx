// Import necessary hooks and components from React and other modules.
import { useState } from 'react';
import './App.css'; // Import custom CSS for styling the App
import Accordion from './components/01-accordion/index';
import ColorGenerator from './components/02-random-color-generator/index';
import StarRating from './components/03-star-rating/index';
import ImageSlider from './components/04-image-slider/index';
import LoadMoreBtn from './components/05-load-more-btn/index';
import TreeView from './components/06-tree-view/index';
import sideMenu from './components/06-tree-view/data'; // Import data for the side menu of the Tree View
import { RxHamburgerMenu } from "react-icons/rx"; // Import hamburger menu icon from React Icons

// Define the main App component
function App() {

  // useState hook to manage the state of sidebar visibility
  const [sideBarOn, SetSideBarOn] = useState(false);

  // Function to toggle the sidebar on or off
  function handleToogleSideBar() {

    // Toggle the current state of sidebar
    SetSideBarOn(!sideBarOn);

  };

  return (
    <>

      {/* SideBar Section */}
      <section>

        {/* SideBar - initially hidden off-screen on smaller screens */}
        <div className={`fixed top-0 left-0 z-40 h-screen transition-all -translate-x-full sm:translate-x-0 w-20 md:w-56 bg-slate-500 ${sideBarOn ? 'opacity-80 translate-x-0' : ''}`}>

          {/* Tree View Component */}
          <TreeView
            sideMenu={sideMenu} // passing the sideMenu data as props
          />

        </div>

        {/* Button to toggle the visibility of the sidebar */}
        <button className={`fixed top-3 z-40 p-4 transition-all sm:ml-20 md:ml-56 sm:hidden text-center text-slate-300 bg-slate-500 opacity-80 ${sideBarOn ? 'translate-x-20 left-0 rounded-e-lg' : 'left-3 rounded-lg'}`} onClick={handleToogleSideBar}>

          <RxHamburgerMenu className="font-bold text-2xl text-slate-100" />

        </button>

      </section>

      {/* Components Section */}
      <section className="transition-all sm:ml-20 md:ml-56">

        {/* Accordion Component */}
        <Accordion />

        {/* Random Color Generator Component */}
        <ColorGenerator />

        {/* Star Rating Component */}
        <StarRating
          starsNum={10} // Passing the number of stars to the component
        />

        {/* Image Slider Component */}
        <ImageSlider
          url={'https://picsum.photos/v2/list'} // URL to fetch images
          page={1} // Specify the starting page for images
          limit={10} // Limit the number of images to display
        />

        {/* Load More Button Component */}
        <LoadMoreBtn
          url={'https://dummyjson.com/products'} // base URL to fetch products
        />

      </section>

    </>
  )
}

export default App;
