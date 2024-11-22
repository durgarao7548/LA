// fetchdata.js

// Define the base API URL
const apiBaseURL = 'http://localhost:5000/api/getData';

// Function to fetch data from a specific table
function fetchTableData(tableName) {
    const outputElement = document.getElementById('data-output');

    // Show a loading message while fetching data
    outputElement.textContent = 'Fetching data, please wait...';

    // Make the API call
    fetch(`${apiBaseURL}?tableName=${tableName}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            // Display fetched data in a readable format
            outputElement.textContent = JSON.stringify(data, null, 2);
        })
        .catch((error) => {
            console.error('Error fetching data:', error);
            outputElement.textContent = `Error fetching data: ${error.message}`;
        });
}

// Example usage: Fetch data for the table 'LoginActivity1'
fetchTableData('LoginActivity1');
fetchTableData('Alarms');
fetchTableData('SensorsData');
