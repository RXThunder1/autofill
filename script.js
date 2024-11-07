const fruits = ["Apple", "Banana", "Grape", "Orange", "Peach", "Strawberry", "Pineapple"];

// Access the input field and results container
const searchBar = document.getElementById('search-bar');
const resultsContainer = document.getElementById('results-container');

// Event listener for user input in the search bar
searchBar.addEventListener('input', function() {
    search(searchBar.value);  // Call the search function with current input
});

// Function to filter the fruit list based on user input
function search(query) {
    const results = fruits.filter(fruit =>
        fruit.toLowerCase().includes(query.toLowerCase())  // Case-insensitive match
    );
    displayResults(results);  // Display the filtered results
}

// Function to display filtered results in the dropdown
function displayResults(results) {
    resultsContainer.innerHTML = "";  // Clear previous results

    if (results.length === 0) return;  // Don't show dropdown if no results

    results.forEach(result => {
        const div = document.createElement('div');
        div.classList.add('suggestion');
        div.textContent = result;

        // Event listener for hover effect
        div.addEventListener('mouseover', () => {
            div.classList.add('highlight');  // Add highlight on hover
        });

        div.addEventListener('mouseout', () => {
            div.classList.remove('highlight');  // Remove highlight when mouse leaves
        });

        // Event listener for when a suggestion is clicked
        div.addEventListener('click', () => {
            searchBar.value = result;  // Populate search bar with clicked suggestion
            resultsContainer.innerHTML = "";  // Clear the dropdown
        });

        resultsContainer.appendChild(div);  // Append suggestion to dropdown
    });
}