import { useState } from 'react';
import './App.css';
import Accordion from './components/01-accordion/index';
import ColorGenerator from './components/02-random-color-generator/index';
import StarRating from './components/03-star-rating/index';
import ImageSlider from './components/04-image-slider/index';
import LoadMoreBtn from './components/05-load-more-btn/index';
import TreeView from './components/06-tree-view/index';
import sideMenu from './components/06-tree-view/data';
import { RxHamburgerMenu } from "react-icons/rx";

function App() {

  const [sideBarOn, SetSideBarOn] = useState(false);

  function handleToogleSideBar() {

    SetSideBarOn(!sideBarOn);

  };

  return (
    <>

      <section>

        <div className={`fixed top-0 left-0 z-40 h-screen transition-all -translate-x-full sm:translate-x-0 w-20 md:w-56 bg-slate-500 ${sideBarOn ? 'opacity-80 translate-x-0' : ''}`}>

          {/* Tree View Component */}
          <TreeView sideMenu={sideMenu} />

        </div>

        <button className={`fixed top-3 z-40 p-4 transition-all sm:ml-20 md:ml-56 sm:hidden text-center text-slate-300 bg-slate-500 opacity-80 ${sideBarOn ? 'translate-x-20 left-0 rounded-e-lg' : 'left-3 rounded-lg'}`} onClick={handleToogleSideBar}>

          <RxHamburgerMenu className="font-bold text-2xl text-slate-100"/>

        </button>

      </section>

      <section className="transition-all sm:ml-20 md:ml-56">

        {/* Accordion Component */}
        <Accordion />

        {/* Random Color Generator Component */}
        <ColorGenerator />

        {/* Star Rating Component */}
        <StarRating
          starsNum={10}
        />

        {/* Image Slider Component */}
        <ImageSlider
          url={'https://picsum.photos/v2/list'}
          page={1}
          limit={10}
        />

        {/* Load More Button Component */}
        <LoadMoreBtn
          url={'https://picsum.photos/v2/list'}
        />

      </section>

    </>
  )
}

export default App
