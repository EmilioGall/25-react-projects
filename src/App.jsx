import './App.css';
import Accordion from './components/01-accordion/index';
import ColorGenerator from './components/02-random-color-generator/index';
import StarRating from './components/03-star-rating/index';
import ImageSlider from './components/04-image-slider/index';

function App() {

  return (
    <>

      {/* Accordion Component */}
      {/* <Accordion /> */}

      {/* Random Color Generator Component */}
      {/* <ColorGenerator /> */}

      {/* Star Rating Component */}
      {/* <StarRating
        starsNum={10}
      /> */}

      {/* Image Slider Component */}
      <ImageSlider
        url={'https://picsum.photos/v2/list'}
        page={1}
        limit={10}
      />

    </>
  )
}

export default App
