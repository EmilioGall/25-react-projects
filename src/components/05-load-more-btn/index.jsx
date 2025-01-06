import { useEffect, useState } from "react";

export default function LoadMoreBtn({ url }) {

   const [loading, setLoading] = useState(false);
   const [products, setProducts] = useState([]);
   const [showedProducts, setShowedProducts] = useState(20);
   const [counter, setCounter] = useState(0);
   const [disableBtn, setDisableBtn] = useState(false);

   async function fetchProducts() {

      if (loading) return; // Prevent fetching if currently loading

      try {

         setLoading(true);

         const resp = await fetch(`https://dummyjson.com/products?limit=${showedProducts}&skip=${counter === 0 ? 0 : counter * showedProducts}`);

         const result = await resp.json();

         console.log(result);

         console.log(result.products);

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

   }, [counter]);

   useEffect(() => {

      console.log(products);

      if (products && products.length >= 194) {

         setDisableBtn(true);

      };

   }, [products]);

   return (
      <section className="relative w-full flex flex-col justify-center items-center gap-5 py-5 bg-orange-400">

         <h2 className="relative text-4xl text-center font-bold">Load More Button</h2>

         {
            loading ? <p>Loading Data. Please wait.</p> : ''
         }

         <div className="grid grid-cols-5 gap-4 p-5">

            {
               products && products.length ?
                  products.map((product) => (
                     <div className="border border-black" key={product.id}>

                        <img src={product.thumbnail} alt={product.title} />
                        <h4>{product.title}</h4>

                     </div>
                  )) :
                  null
            }

         </div>

         <div>
            <button disabled={disableBtn} onClick={() => setCounter(counter + 1)}>Load more products</button>
         </div>

         <div>
            {
               disableBtn ? <p>All products are showed.</p> : null
            }
         </div>

      </section>
   );

}