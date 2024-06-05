function fetchData(url, callback) {
  fetch(url)
  .then(response => response.json())
  .then(data => {
    callback(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
  
  setTimeout(() => {
    const data = { id: 1, name: 'John Doe', age: 30 };
    callback(data);
  }, 3000); 
}

function handleData(data) {
  console.log('Data received:', data);
}

console.log('Fetching data...');
fetchData('https://jsonplaceholder.typicode.com/posts/1', handleData);
console.log('Data fetch request initiated, program continues execution...');
