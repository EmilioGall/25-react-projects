import { useState } from 'react';
import './App.css';
import Accordion from './components/01-accordion/index';
import ColorGenerator from './components/02-random-color-generator/index';
import StarRating from './components/03-star-rating/index';
import ImageSlider from './components/04-image-slider/index';
import LoadMoreBtn from './components/05-load-more-btn/index';
import TreeView from './components/06-tree-view/index';
import sideMenu from './components/06-tree-view/data';

function App() {

  return (
    <>

      <section className="fixed top-0 left-0 z-40 h-screen transition-all -translate-x-full sm:translate-x-0 sm:w-20 md:w-56 bg-slate-500">

        {/* Tree View Component */}
        <TreeView sideMenu={sideMenu}/>

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
