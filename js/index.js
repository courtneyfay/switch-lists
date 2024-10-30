const sweetTreats = [ 'BOOberry Pies', 'Rice Krispie Brains', 'Mummy Cake Pops', 'Spiderweb Brownies', 'Bat Cookies' ];
const savoryEats = [ 'Eyeballs Appetizer', 'Breadstick Serpents', 'Pumpkin Baked Brie', 'Spider Pizzas', 'Ghost Veggies and Hummus' ];

const displayRecipes = (list) => {
    const recipeList = document.getElementById('recipe-list');

    for (index in list) {
        const food = list[index];

        // create a new list item
        const newListItem = document.createElement('li');

        // update the text of that new list item to be food
        newListItem.textContent = food;
 
        // add the new list item to the unordered list on the screen
        recipeList.appendChild(newListItem);
    }

}

const switchLists = () => {
    // set up variables
    const recipeList = document.getElementById('recipe-list');
    const sweetIsChecked = document.getElementById('sweet').checked;
    const savoryIsChecked = document.getElementById('savory').checked;

    // clear out previous list from the screen
    recipeList.textContent = '';

    // depending on which recipe type the user chose...
    if (sweetIsChecked) {
        // ...show the sweet list on the screen
        displayRecipes(sweetTreats);

    } else if (savoryIsChecked) {
        // ...show the savory list on the screen
        displayRecipes(savoryEats);

    } else {
        // display error message
        recipeList.textContent = 'Please choose a recipe type'
    }
}