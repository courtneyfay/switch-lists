const sweetTreats = [
    {
        name: 'BOOberry Pies',
        url: 'https://myhappybakes.com/blog/booberry-hand-pies/',
    },
    {
        name: 'Rice Krispie Brains',
        url: 'https://thetiptoefairy.com/how-to-make-rice-krispies-brains/',
    },
    {
        name: 'Mummy Cake Pops',
        url: 'https://dessertsonadime.com/mummy-cake-pops-recipe/',
    },
    {
        name: 'Spiderweb Brownies',
        url: 'https://www.kingarthurbaking.com/recipes/spider-web-brownies-recipe',
    },
    {
        name: 'Bat Cookies',
        url: 'https://kitchendivas.com/bat-cookies/',
    }
];

const savoryEats = [ 
    {
        name: 'Eyeballs Appetizer',
        url: 'https://homemadeheather.com/halloween-mozza-eyes-appetizer/',
    },
    {
        name: 'Breadstick Serpents',
        url: 'https://lifecurrentsblog.com/breadstick-snakes/',
    },
    {
        name: 'Pumpkin Baked Brie',
        url: 'https://www.tasteofhome.com/article/pumpkin-baked-brie/',
    },
    {
        name: 'Spider Pizzas',
        url: 'https://foxeslovelemons.com/halloween-mini-pizzas/',
    },
    {
        name: 'Ghost Veggies and Hummus',
        url: 'https://heathercooan.com/halloween-veggie-trays/',
    }
];

const drinks = [ 
    {
        name: 'Creepy Shirley Temples',
        url: 'https://boulderlocavore.com/creepy-shirley-temples/',
    },
    {
        name: 'Vampire Blood',
        url: 'https://alwaysusebutter.com/vampire-margarita-mocktail/',
    },
    {
        name: 'Pumpkin Juice',
        url: 'https://www.aimeemars.com/pumpkin-juice/',
    },
    {
        name: 'Apple Cider',
        url: 'https://www.yellowthyme.com/instant-pot-apple-cider/',
    },
    {
        name: 'Black Widow Mocktail',
        url: 'https://alwaysusebutter.com/black-widow-martini-mocktail/',
    }
];

const displayRecipes = (list) => {
    const recipeList = document.getElementById('recipe-list');

    for (index in list) {
        const food = list[index];
        // create a new list item
        const newListItem = document.createElement('li');

        // create a new link
        const newLink = document.createElement('a');
        // set the link to open in a new window
        newLink.target = "_blank";
        // update the link text
        newLink.textContent = food.name;
        // update the link url
        newLink.href = food.url;
        // add the new link to the list item
        newListItem.appendChild(newLink);

        // add the new list item to the unordered list on the screen
        recipeList.appendChild(newListItem);
    }

}

const switchLists = () => {
    // set up variables
    const recipeList = document.getElementById('recipe-list');
    const sweetIsChecked = document.getElementById('sweet').checked;
    const savoryIsChecked = document.getElementById('savory').checked;
    const drinksIsChecked = document.getElementById('drinks').checked;

    // clear out previous list from the screen
    recipeList.textContent = '';

    // depending on which recipe type the user chose...
    if (sweetIsChecked) {
        // ...show the sweet list on the screen
        displayRecipes(sweetTreats);

        // and update the style of the list to look sweet
        recipeList.className = 'sweet';

    } else if (savoryIsChecked) {
        // ...show the savory list on the screen
        displayRecipes(savoryEats);

        // and update the style of the list to look savory
        recipeList.className = 'savory';

    } else if (drinksIsChecked) {
        // ...show the savory list on the screen
        displayRecipes(drinks);

        // and update the style of the list to look savory
        recipeList.className = 'drinks';

    } else {
        // display error message
        recipeList.textContent = 'Please choose a recipe type'

        recipeList.className = 'default';
    }
}