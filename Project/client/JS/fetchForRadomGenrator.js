var Recipes = document.createElement('ul')
const RandomRecipeGenerator = () => {
fetch("http://localhost:5000/RandomRecipeLink")
.then ((response)=> {
    return response.json()
})
.then ((RecipeLink) => {
    console.log(RecipeLink);
    const RecipeListItem = document.createElement('li') 
    RecipeListItem.type = 'none'
    const Link = document.createElement('a')
    Link.href = RecipeLink
    Link.innerHTML = " Get Meal 🍔"
    RecipeListItem.appendChild(Link)
    let LinkCreator = document.getElementById("RecpLink")
    LinkCreator.appendChild(Link)
});
}
