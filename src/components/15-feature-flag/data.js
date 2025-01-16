const dummyApiResponse = {

   quote1 : true,
   quote2 : true,
   quote3 : true,
   quote4 : true,
   quote5 : true,
   quote6 : false,
   quote7 : true,
   quote8 : false,
   quote9 : true,
   quote10 : true,

};

function featureFlagDataServiceCall() {

   return new Promise((resolve, reject) => {

      if (dummyApiResponse) {

         setTimeout(resolve(dummyApiResponse), 500);

      } else {

         reject('Some error occured! Please try again.')

      };

   });

};

export default featureFlagDataServiceCall();