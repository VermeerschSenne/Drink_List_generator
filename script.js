// List of colors for categories
const categoryColours = ["#00aeef", "#ec008c", "#7ac143", "#f47b20"];

// Load JSON data
fetch('sorted_drinks.json')
    .then(response => response.json())
    .then(data => {
        const drinkContainer = document.getElementById('drink-container');
        let colourIndex = 0;

        // Iterate through categories in JSON
        for (const category in data) {
            if (data.hasOwnProperty(category)) {
                const categoryData = data[category];
                // Assign a colour cyclically from the list
                const categoryColour = categoryColours[colourIndex % categoryColours.length];
                const categoryBox = createCategoryBox(category, categoryData, categoryColour);
                drinkContainer.appendChild(categoryBox);
                
                // Increment the colour index and restart if it exceeds the array length
                colourIndex++;
            }
        }
    })
    .catch(error => console.error('Error loading JSON data:', error));

// Function to create category box
function createCategoryBox(category, items, colour) {
    const box = document.createElement('div');
    box.classList.add('drink-category');
    box.style.backgroundColor = colour;

    const title = document.createElement('h2');
    title.textContent = category;
    box.appendChild(title);

    items.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('drink-item');

        const name = document.createElement('span');
        name.textContent = item.name;

        const price = document.createElement('span');
        price.textContent = `€${item.price.toFixed(2)}`;

        itemDiv.appendChild(name);
        itemDiv.appendChild(price);
        box.appendChild(itemDiv);
    });

    return box;
}
