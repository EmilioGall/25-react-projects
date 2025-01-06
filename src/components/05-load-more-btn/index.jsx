import { useEffect, useState } from "react";

export default function LoadMoreBtn({ url }) {

   const [loading, setLoading] = useState(false);
   const [products, setProducts] = useState([]);
   const [showedProducts, setShowedProducts] = useState(20);
   const [counter, setCounter] = useState(0);

   async function fetchProducts() {

      try {

         const response = fetch(`https://dummyjson.com/products?limit=20&skip=${counter === 0 ? 0 : counter*20}`);

         console.log(response);

         const result = await response.json();

         console.log(result);
         

      } catch(e) {

         console.log(e);

      };

   };

   useEffect(() => {

      fetchProducts();

   }, []);

   return (
      <section className="relative h-screen w-full flex flex-col justify-center items-center gap-5 bg-orange-400">

         <h2 className="relative text-4xl text-center font-bold">Load More Button</h2>

         <div>

         </div>

      </section>
   );

}