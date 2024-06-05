//Creating a Promise
const promise = new Promise((resolve, reject) => {
    // resolve("Sucess");
    reject("Failed");

});

    promise
    .then((response) => {
      console.log(response);
    })
   
    .catch((error) => {
        console.error(error);
      });