# 🍹 ESN Bar Drink List Generator

This project is a **dynamic drink list generator** for the **ESN Bar**, created by **ESN Leonardo Kortrijk**. It allows drink menus to be generated dynamically from a JSON file, with custom styling for categories and pricing. The goal is to provide a visually appealing and easy-to-maintain system for updating drink lists.

## ✨ Features
- Generates drink categories and items from a structured **JSON file**.
- Uses **custom background colors** for different drink categories.
- Dynamically displays the list on a webpage.
- Includes an **ESN logo** in the header.
- Fully customizable via **CSS and JavaScript**.
- Includes a **Python script** to automatically sort drinks alphabetically.

## 💂️ Project Structure
```
├── Drink_List.html      # Main HTML file
├── drinks.json          # Original unsorted drink list in JSON format
├── ESN_logo.svg         # ESN star logo
├── README.md            # Project documentation
├── script.js            # JavaScript logic for dynamic content
├── sorted_drinks.json   # JSON file containing sorted drink categories & items
├── sorting_script.py    # Python script to sort drinks.json alphabetically
├── styles.css           # CSS file for styling
```

## 🚀 Getting Started
### 1️⃣ Clone the Repository
```
git clone https://github.com/YOUR_GITHUB_USERNAME/your-repository.git
cd your-repository
```

### 2️⃣ Open in Browser
Simply open `Drink_List.html` in any modern web browser.

### 3️⃣ Modify the Drink List
- Update `drinks.json` to add, remove, or modify drinks.
- Run `sorting_script.py` to sort the drinks and save them into `sorted_drinks.json`.
- Refresh the page to see changes instantly.

## 🛠 Customization
- To **change colors**, update the `categoryColors` array in `script.js`.
- To modify styling, edit `styles.css`.

---
Created with ❤️ by **ESN Leonardo Kortrijk**

