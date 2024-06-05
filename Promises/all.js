const apiUrl1 = 'https://api.nationalize.io?name=nathaniel';
const apiUrl2 = 'https://jsonplaceholder.typicode.com/posts/2'; 

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Re-throw the error to propagate it further
  }
}

async function fetchAllData() {
  try {
    const [data1, data2] = await Promise.all([fetchData(apiUrl1), fetchData(apiUrl2)]);
    processData(data1, data2);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function processData(data1, data2) {
  console.log('Data fetched successfully from API 1:', data1);
  console.log('Data fetched successfully from API 2:', data2);
}

fetchAllData();
