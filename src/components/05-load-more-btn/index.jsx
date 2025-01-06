import { useEffect, useState } from "react";

export default function LoadMoreBtn({ url }) {

   const [loading, setLoading] = useState(false);
   const [products, setProducts] = useState([]);
   const [showedProducts, setShowedProducts] = useState(20);
   const [counter, setCounter] = useState(0);

   async function fetchProducts() {

      try {

         setLoading(true);

         const resp = await fetch(`https://dummyjson.com/products?limit=${showedProducts}&skip=${counter === 0 ? 0 : counter * showedProducts}`);

         const result = await resp.json();

         console.log(result.products);

         if (result && result.products && result.products.length) {

            setProducts(result.products);

            setLoading(false);

         };



      } catch (e) {

         console.log(e);

         setLoading(false);

      };

   };

   useEffect(() => {

      fetchProducts();

   }, []);

   return (
      <section className="relative w-full flex flex-col justify-center items-center gap-5 bg-orange-400">

         <h2 className="relative text-4xl text-center font-bold">Load More Button</h2>

         {
            loading ? <p>Loading Data. Please wait.</p> : ''
         }

         <div className="grid grid-cols-4 gap-4 p-5">

            {
               products && products.length ?
                  products.map((product) => (
                     <div className="border border-black" key={product.id}>

                        <img src={product.thumbnail} alt={product.title} />
                        <h4>{product.title}</h4>

                     </div>
                  )) :
                  ''
            }

         </div>

      </section>
   );

}