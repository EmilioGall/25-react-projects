import './App.css';
import Accordion from './components/01-accordion/index';
import ColorGenerator from './components/02-random-color-generator/index';
import StarRating from './components/03-star-rating/index';

function App() {

  return (
    <>

      {/* Accordion Component */}
      <Accordion />

      {/* Random Color Generator Component */}
      <ColorGenerator />

      {/* Star Rating Component */}
      <StarRating />

    </>
  )
}

export default App
