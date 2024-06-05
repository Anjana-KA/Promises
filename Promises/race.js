const apiUrl1 = 'https://jsonplaceholder.typicode.com/posts/2';
const apiUrl2 = 'https://api.nationalize.io?name=nathaniel';

async function fetchData(url, timeout) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function fetchWithTimeout(url, timeout) {
  return Promise.race([
    fetchData(url),
    new Promise((resolve, reject) => {
      setTimeout(() => reject(new Error('Timeout')), timeout);
    })
  ]);
}

async function getDataFromFastestSource() {
  try {
    const fastestData = await fetchWithTimeout(apiUrl1, 5000); // Timeout after 5 seconds
    console.log('Data from fastest API:', fastestData);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getDataFromFastestSource();
