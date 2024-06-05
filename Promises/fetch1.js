const apiUrl = 'http://universities.hipolabs.com/search?country=United+States';

async function fetchData() {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();

    processData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

function processData(data) {
  console.log('Data fetched successfully:', data);
}

fetchData();
