// List of colors for categories
const categoryColors = ["#00aeef", "#ec008c", "#7ac143", "#f47b20"];

// Load JSON data
fetch('sorted_drinks.json')
    .then(response => response.json())
    .then(data => {
        const drinkContainer = document.getElementById('drink-container');
        let colorIndex = 0;

        // Iterate through categories in JSON
        for (const category in data) {
            if (data.hasOwnProperty(category)) {
                const categoryData = data[category];
                // Assign a color cyclically from the list
                const categoryColor = categoryColors[colorIndex % categoryColors.length];
                const categoryBox = createCategoryBox(category, categoryData, categoryColor);
                drinkContainer.appendChild(categoryBox);
                
                // Increment the color index and restart if it exceeds the array length
                colorIndex++;
            }
        }
    })
    .catch(error => console.error('Error loading JSON data:', error));

// Function to create category box
function createCategoryBox(category, items, color) {
    const box = document.createElement('div');
    box.classList.add('drink-category');
    box.style.backgroundColor = color;

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
