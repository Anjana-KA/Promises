const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/2';
const apiUrl2 = 'https://dummy.restapiexample.com/api/v1/employee/1';
const apiUrl3 = 'https://api.nationalize.io?name=nathaniel';

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

const fetchPromise1 = fetchData(apiUrl1);
const fetchPromise2 = fetchData(apiUrl2);
const fetchPromise3 = fetchData(apiUrl3);

Promise.race([fetchPromise1, fetchPromise2, fetchPromise3])
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
