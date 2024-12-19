import { useState } from "react";
import data from './data';

export default function Accordion() {

   const [selected, setSelected] = useState(null);

   function handleSingleSelection(getCurrentId) {

      console.log(getCurrentId);

      setSelected(getCurrentId == selected ? null : getCurrentId);

   }


   return (

      <div className="wrapper">

         <h1>Accordion</h1>

         <div className="accordion">
            {

               data && data.length > 0 ?

                  data.map((dataItem) =>

                     <div className="item">

                        <div className="title" onClick={() => handleSingleSelection(dataItem.id)}>

                           <h3>{dataItem.question}</h3>

                           <span>+</span>

                        </div>

                        {

                           selected == dataItem.id ?

                              <div>

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
