import { useEffect, useState } from "react"

export default function ScrollIndicator() {

   const [scrollPercentage, setScrollPercentage] = useState(0);

   function handleScrollPercentage() {

      // console.log('document.body.scrollTop =', document.body.scrollTop);

      // console.log('document.documentElement.scrollTop =', document.documentElement.scrollTop);

      // console.log('document.documentElement.scrollHeight =', document.documentElement.scrollHeight);

      // console.log('document.documentElement.clientHeight =', document.documentElement.clientHeight);

      // console.log('______________________________________');

      const howMuchScrolledFromTop = document.documentElement.scrollTop;

      // console.log('howMuchScrolledFromTop =', howMuchScrolledFromTop);

      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

      // console.log('height =', height);

      setScrollPercentage((howMuchScrolledFromTop / height) * 100);

   };

   useEffect(() => {

      window.addEventListener('scroll', handleScrollPercentage);

      return () => {

         window.removeEventListener('scroll', () => { });

      };


   }, []);

   console.log('scrollPercentage =', scrollPercentage);

   return (

      // Main section of the Scroll Indicator component
      <section id="scroll-indicator" className={`h-screen w-4 pt-12 font-mono`}>

         <div className={`h-full py-5`}>

            <div className={`h-full w-full bg-slate-600 rounded-full p-1`}>

               <div className={`w-full bg-slate-300 rounded-full`} style={{height: `${scrollPercentage}%`}}>

               </div>

            </div>

         </div>

      </section>

   )

};