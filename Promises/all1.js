const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, 'Promise 1');
  });
  
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, 'Promise 2');
  });
  
  const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000, 'Promise 3');
  });
  
  Promise.all([promise1, promise2, promise3])
    .then(values => {
      console.log(values); 
    });
  