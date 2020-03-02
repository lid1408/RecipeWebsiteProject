const RandomRecipesGenerator = () => {
    fetch('http://localhost:5000/RandomRecipeLink')
        .then((response) => {
            return response.json();
        })
        .then((RecipeLink) => {
            var number = Math.floor(Math.random() * 6);
            window.location = RecipeLink[number]    
                        
    });
}

