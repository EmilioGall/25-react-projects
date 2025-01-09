// Import necessary hooks from React for managing component state and lifecycle
import { useEffect, useState } from "react";

/**
 * Description: LoadMoreBtn component fetches and displays products, allowing users to load more products on demand.
 * @param {string} url - The URL from which products will be fetched.
 */
export default function LoadMoreBtn({ url }) {

   // State variable to manage loading status
   const [loading, setLoading] = useState(false);

   // State variable to store the list of fetched products
   const [products, setProducts] = useState([]);

   // State variable to determine how many products to show at once
   const [showedProducts, setShowedProducts] = useState(5);

   // State variable to keep track of how many times the "Load More" button has been clicked
   const [counter, setCounter] = useState(0);

   // State variable to disable the "Load More" button when all products are loaded
   const [disableBtn, setDisableBtn] = useState(false);

   /**
    * Function to fetch products from the specified URL with pagination.
    * It updates the products state by appending new products while avoiding duplicates.
    */
   async function fetchProducts() {

      // Prevent fetching if a request is already in progress
      if (loading) return;

      try {

         // Set loading state to true to show loading status
         setLoading(true);

         // Fetch data from external API, applying limit and skip for pagination
         const resp = await fetch(`${url}?limit=${showedProducts}&skip=${counter === 0 ? 0 : counter * showedProducts}`);

         // Parse the response JSON
         const result = await resp.json();

         // console.log(result);

         // console.log(result.products);

         // Check if the result is valid and contains products
         if (result && result.products && result.products.length) {

            // Update the products state while preventing duplicates
            setProducts(prevData => {

               // Filter out products that are already in the previous state
               const newProducts = result.products.filter(newProduct =>

                  // prevent duplicates
                  !prevData.some(existingProduct => existingProduct.id === newProduct.id) // prevent duplicates

               );

               // Concatenate previous and new products
               return [...prevData, ...newProducts];

            });

            // Set loading state to false after fetching
            setLoading(false);

         };

      } catch (e) {

         // Log any errors that occur during fetch
         console.log(e);

      } finally {

         // Ensure loading state is false in any case
         setLoading(false);

      };

   };

   // Effect to fetch products whenever 'counter', or 'showedProducts' states change
   useEffect(() => {

      // Call fetchProducts to load products based on pagination
      fetchProducts();

   }, [counter, showedProducts]); // Dependencies to trigger fetch

   // Effect to check if all products have been loaded; if so, disable the button
   useEffect(() => {

      // console.log(products);

      // Check if the total products loaded reach a certain threshold (194)
      if (products && products.length >= 194) {

         // Disable the button if all products are shown
         setDisableBtn(true);

      };

   }, [products]); // Dependency on products state

   return (

      // Main section of the Load-more button component
      <section id="load-more-button" className="w-full text-slate-800 flex flex-col justify-center items-center gap-5 py-5 font-mono bg-orange-300">

         {/* Load-more Button component Title */}
         <h2 className="text-4xl text-center font-bold">Load More Button</h2>

         {/* Select dropdown container */}
         <div>

            {/* Label for the select element */}
            <label className="text-md text-center px-2" htmlFor="productsNum">How many products in each showed group?</label>

            {/* Select dropdown for users to choose how many products to display */}
            <select value={showedProducts} className="apperance-none text-md px-1 rounded" name="productsNum" id="productsNum" onChange={(e) => setShowedProducts(e.target.value)}>

               {/* Options to select product limit */}
               <option value="5">5</option>
               <option value="10">10</option>
               <option value="15">15</option>
               <option value="20">20</option>
               <option value="50">50</option>

            </select>

         </div>

         {/* Conditionally render loading text if loading is true */}
         {
            loading ? <p>Loading Data. Please wait.</p> : ''
         }

         {/* Grid layout for displaying products */}
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4 p-5">

            {
               // Check if products are available
               products && products.length ?
                  products.map((product) => (
                     <div
                        className="flex flex-col items-center bg-slate-200 rounded-xl text-center p-3"
                        key={product.id} // Unique key for each product
                     >

                        {/* Product image */}
                        <img src={product.thumbnail} alt={product.title} />

                        {/* Product title */}
                        <h4 className="text-lg p-2">{product.title}</h4>

                     </div>
                  )) :

                  // Render nothing if no products are found
                  null
            }

         </div>

         {/* Button to load more products */}
         <div>

            <button
               id="load-more-button-end" // Unique Id for the button
               className={`border border-slate-800 rounded text-center px-3 py-2 ${disableBtn ? '' : 'cursor-pointer hover:bg-slate-800 hover:text-slate-200'}`} // Apply styles conditionally based on disabled state
               disabled={disableBtn} // Disable button when all products have been shown
               onClick={() => setCounter(counter + 1)} // Increment counter to load more products
            >

               Load more products

            </button>

         </div>

         {/* Inform the user when all products have been displayed */}
         <div>
            {
               disableBtn ? <p className="text-xl">All products are showed.</p> : null
            }
         </div>

      </section>
   );

}