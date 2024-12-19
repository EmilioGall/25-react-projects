import { useState } from "react";
import data from './data';
import './style.css';

export default function Accordion() {

   const [selected, setSelected] = useState(null);

   function handleSingleSelection(getCurrentId) {

      console.log(getCurrentId);

      setSelected(getCurrentId == selected ? null : getCurrentId);

   }


   return (

      <div className="wrapper">

         <div className="accordion">

            <h1>Accordion</h1>

            {

               data && data.length > 0 ?

                  data.map((dataItem) =>

                     <div key={dataItem.id} className="item">

                        <div className="title" onClick={() => handleSingleSelection(dataItem.id)}>

                           <h3>{dataItem.question}</h3>

                           <span>+</span>

                        </div>

                        {

                           selected == dataItem.id ?

                              <div className="content">

                                 {dataItem.answer}

                              </div>
                              :

                              null

                        }

                     </div>

                  ) :

                  <div>No Data found!</div>

            }

         </div>

      </div>

   );

}
