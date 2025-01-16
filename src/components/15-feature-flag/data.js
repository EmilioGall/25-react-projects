// Define a mock API response as an object where each quote has a boolean value indicating its feature flag state
const dummyApiResponse = {

   quote1: true,
   quote2: true,
   quote3: true,
   quote4: true,
   quote5: true,
   quote6: false,
   quote7: true,
   quote8: false,
   quote9: true,
   quote10: true,

};

// This function simulates an asynchronous data service call to fetch feature flags
function featureFlagDataServiceCall() {

   return new Promise((resolve, reject) => {

      if (dummyApiResponse) {

         // Simulate a delay of 500ms before resolving the promise with the dummy API response
         setTimeout(resolve(dummyApiResponse), 500);

      } else {

         // If the response is not available, reject the promise with an error message
         reject('Some error occured! Please try again.')

      };

   });

};

// Export the feature flag data service call as the default export of the module
export default featureFlagDataServiceCall();