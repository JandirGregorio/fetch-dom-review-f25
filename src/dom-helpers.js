// expect the data from the API
export const renderRecipes = (recipes) => {
  const recipesList = document.querySelector('#recipes-list');
  const recipeCount = document.querySelector('#recipe-count');

  // Clear the old content before rendering new content
  recipesList.innerHTML = '';
  recipeCount.textContent = recipes.length;

  recipes.forEach((recipe) => {
    const li = document.createElement('li');
    li.dataset.recipeId = recipe.id;

    const img = document.createElement('img');
    img.src = recipe.image;
    img.alt = recipe.name;

    const h3 = document.createElement('h3');
    h3.textContent = recipe.name;

    const info = document.createElement('p');
    info.textContent = `${recipe.cuisine} · ${recipe.difficulty}`;

    li.append(img, h3, info);
    recipesList.append(li);
  });
};