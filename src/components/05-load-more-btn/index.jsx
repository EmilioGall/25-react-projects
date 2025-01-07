import { useEffect, useState } from "react";

export default function LoadMoreBtn({ url }) {

   const [loading, setLoading] = useState(false);
   const [products, setProducts] = useState([]);
   const [showedProducts, setShowedProducts] = useState(5);
   const [counter, setCounter] = useState(0);
   const [disableBtn, setDisableBtn] = useState(false);

   async function fetchProducts() {

      if (loading) return; // Prevent fetching if currently loading

      try {

         setLoading(true);

         const resp = await fetch(`https://dummyjson.com/products?limit=${showedProducts}&skip=${counter === 0 ? 0 : counter * showedProducts}`);

         const result = await resp.json();

         // console.log(result);

         // console.log(result.products);

         if (result && result.products && result.products.length) {

            setProducts(prevData => {

               const newProducts = result.products.filter(newProduct =>

                  !prevData.some(existingProduct => existingProduct.id === newProduct.id) // prevent duplicates

               );

               return [...prevData, ...newProducts];

            });

            setLoading(false);

         };

      } catch (e) {

         console.log(e);

      } finally {

         setLoading(false);

      };

   };

   useEffect(() => {

      fetchProducts();

   }, [counter, showedProducts]);

   useEffect(() => {

      // console.log(products);

      if (products && products.length >= 194) {

         setDisableBtn(true);

      };

   }, [products]);

   return (
      <section id="load-more-button" className="w-full flex flex-col justify-center items-center gap-5 py-5 font-mono bg-orange-400">

         <h2 className="text-4xl text-center font-bold">Load More Button</h2>

         <div>

            <label className="text-lg text-center px-2" htmlFor="productsNum">How many products in each showed group?</label>

            <select value={showedProducts} className="apperance-none px-2 py-1 rounded" name="productsNum" id="productsNum" onChange={(e) => setShowedProducts(e.target.value)}>
               <option value="5">5</option>
               <option value="10">10</option>
               <option value="15">15</option>
               <option value="20">20</option>
            </select>

         </div>

         {
            loading ? <p>Loading Data. Please wait.</p> : ''
         }

         <div className="grid grid-cols-5 gap-4 p-5">

            {
               products && products.length ?
                  products.map((product) => (
                     <div className="border border-black bg-slate-200 rounded-xl text-center p-3" key={product.id}>

                        <img src={product.thumbnail} alt={product.title} />
                        <h4 className="text-xl p-2">{product.title}</h4>

                     </div>
                  )) :
                  null
            }

         </div>

         <div>

            <label className="text-lg text-center px-2" htmlFor="productsNum">How many products in each showed group?</label>

            <select value={showedProducts} className="apperance-none px-2 py-1 rounded" name="productsNum" id="productsNum" onChange={(e) => setShowedProducts(e.target.value)}>
               <option value="5">5</option>
               <option value="10">10</option>
               <option value="15">15</option>
               <option value="20">20</option>
            </select>

         </div>

         <div>
            <button id="load-more-button-end" className={`border border-black bg-slate-300 rounded text-center px-3 py-2 ${disableBtn ? '' : 'cursor-pointer hover:bg-slate-400'}`} disabled={disableBtn} onClick={() => setCounter(counter + 1)}>Load more products</button>
         </div>

         <div>
            {
               disableBtn ? <p className="text-xl">All products are showed.</p> : null
            }
         </div>

      </section>
   );

}