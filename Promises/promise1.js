function fetchUserData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const users = [
          { id: 1, name: "John", email: "john@example.com" },
          { id: 2, name: "Alice", email: "alice@example.com" },
          { id: 3, name: "Bob", email: "bob@example.com" }
        ];
  
        resolve(users);       
      }, 2000); 
    });
  }
  
  console.log("Fetching user data...");
  fetchUserData()

    .then(users => {
      console.log("User data fetched successfully!");
      console.log("Users:", users);
      
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Additional data processing completed.");
          resolve();
        }, 3000);
      });
    })

    .then(() => {
      console.log("Further actions after additional data processing...");
    })

    .catch(error => {
      console.error("Error occurred:", error);
    })

    .finally(() => {
      console.log("Promise settled.");
    });





// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         const success = Math.random() < 0.8;
  
//         if (success) {
//           const users = [
//             { id: 1, name: "John", email: "john@example.com" },
//             { id: 2, name: "Alice", email: "alice@example.com" },
//             { id: 3, name: "Bob", email: "bob@example.com" }
//           ];
//           resolve(users); 
//         } else {
//           reject("Error: Unable to fetch user data!"); 
//         }
//       }, 2000); 
//     });
//   }
  
//   console.log("Fetching user data...");
//   fetchUserData()
//     .then(users => {
//       console.log("User data fetched successfully!");
//       console.log("Users:", users);
      
//       return new Promise((resolve) => {
//         setTimeout(() => {
//           console.log("Additional data processing completed.");
//           resolve();
//         }, 1500);
//       });
//     })
//     .then(() => {
//       console.log("Further actions after additional data processing...");
//     })
//     .catch(error => {
//       console.error("Error occurred:", error);
//     })
//     .finally(() => {
//       console.log("Promise settled.");
//     });
  