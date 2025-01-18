// Import necessary hooks and components from React and other modules.
import { useEffect, useState } from 'react';
import { useStore } from './store';
import './App.css'; // Import custom CSS for styling the App
import Accordion from './components/01-accordion/index';
import ColorGenerator from './components/02-random-color-generator/index';
import StarRating from './components/03-star-rating/index';
import ImageSlider from './components/04-image-slider/index';
import LoadMoreBtn from './components/05-load-more-btn/index';
import TreeView from './components/06-tree-view/index';
import sideMenu from './components/06-tree-view/data'; // Import data for the side menu of the Tree View
import { RxHamburgerMenu } from "react-icons/rx"; // Import hamburger menu icon from React Icons
import QrCodeGenerator from './components/07-qr-code-generator/index';
import LightDarkMode from './components/08-light-dark-mode/index';
import ScrollIndicator from './components/09-scroll-indicator/index';
import CustomTabs from './components/10-custom-tabs';
import CustomModals from './components/11-custom-modals';
import GithubProfileFinder from './components/12-github-profile-finder';
import SearchAutocomplete from './components/13-search-autocomplete-api';
import TicTacToe from './components/14-tic-tac-toe';
import FeatureFlag from './components/15-feature-flag';
import FeatureFlagGlobalState from './components/15-feature-flag/context/index'
import UseFetchHookTest from './components/16-use-fetch-custom-hook/test';
import UseOnClickOutsideHookTest from './components/17-use-outside-click-custom-hook/test';
import UseWindowResizeHookTest from './components/18-use-window-resize/test';
import ScrollTopBottom from './components/19-scroll-top-bottom';
import ScrollToSection from './components/20-scroll-to-section';


// Define the main App component
function App() {

  const { state, dispatch } = useStore();

  // useState hook to manage the state of sidebar visibility
  const [sideBarOn, setSideBarOn] = useState(false);

  // useState hook to manage the state of sidebar visibility
  const [scrollIndicatorOn, setScrollIndicatorOn] = useState(sideMenu[8].visible);

  // Function to toggle the sidebar on or off
  function handleToogleSideBar() {

    // Toggle the current state of sidebar
    setSideBarOn(!sideBarOn);

  };

  useEffect(() => {

    setScrollIndicatorOn(state.scrollIndicator)

  }, [state.scrollIndicator])


  return (
    <>

      {/* SideBar Section */}
      <section>

        <div className={`relative z-30 ${sideBarOn ? 'opacity-80' : ''}`}>

          {/* SideBar - initially hidden off-screen on smaller screens */}
          <div className={`fixed top-0 left-0 z-30 h-screen transition-all -translate-x-full sm:translate-x-0 w-20 md:w-56 bg-slate-500 ${sideBarOn ? 'translate-x-0' : ''}`}>

            {/* Tree View Component */}
            <TreeView
              sideMenu={sideMenu} // passing the sideMenu data as props
            />

          </div>

          {/* Scroll Indicator - initially hidden off-screen */}
          <div className={`fixed top-0 z-40 h-screen transition-all ${scrollIndicatorOn && sideBarOn ? 'left-1 sm:translate-x-1 md:translate-x-2' : '-translate-x-full'} ${scrollIndicatorOn ? 'left-0 sm:translate-x-1 md:translate-x-2' : '-translate-x-full'}`}>

            {/* Tree View Component */}
            <ScrollIndicator />

          </div>

        </div>

        {/* Button to toggle the visibility of the sidebar */}
        <button className={`fixed top-3 z-30 p-4 transition-all sm:ml-20 md:ml-56 sm:hidden text-center text-slate-300 bg-slate-500 opacity-80 ${sideBarOn ? 'translate-x-20 left-0 rounded-e-lg' : 'left-3 rounded-lg'}`} onClick={handleToogleSideBar}>

          <RxHamburgerMenu className="font-bold text-2xl text-slate-100" />

        </button>

      </section>
      {/* SideBar Section */}

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

        {/* QR Code Generator Component */}
        <QrCodeGenerator />

        {/* Light-Dark Mode Component */}
        <LightDarkMode />

        {/* Custom Tabs Component */}
        <CustomTabs />

        {/* Custom Modals Component */}
        <CustomModals />

        {/* GitHub Profile Finder Component */}
        <GithubProfileFinder />

        {/* Search Autocomplete with API Component */}
        <SearchAutocomplete />

        {/* Tic-tac-toe Component */}
        <TicTacToe />

        {/* Feature Flag Component */}
        <FeatureFlagGlobalState>

          <FeatureFlag />

        </FeatureFlagGlobalState>

        {/* useFetch - Custom Hook Component */}
        <UseFetchHookTest />

        {/* useOutsideClick - Custom Hook Component */}
        <UseOnClickOutsideHookTest />

        {/* useWindowResize - Custom Hook Component */}
        <UseWindowResizeHookTest />

        {/* Scroll Top-Bottom Component */}
        <ScrollTopBottom />

        {/* Scroll to Section Component */}
        <ScrollToSection />

      </section>
      {/* Components Section */}

    </>
  )
}

// Export the App component as default
export default App;
