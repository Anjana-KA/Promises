const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

fetch(apiUrl)
  .then(response => {
    
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {

    console.log('Data fetched successfully:', data);
  })
  .catch(error => {

    console.error('Error fetching data:', error);
  });
