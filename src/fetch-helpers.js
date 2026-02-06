export const getRecipes = () => {
  return fetch('https://dummyjson.com/recipes?limit=9')
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }

      // we've received the 'envelope'
      // it takes time to unpack
      return response.json();
    })
    .then((data) => {
      // when the process is done, the promise will resolve to data.recipes
      return data.recipes;
    })
    .catch((error) => {
      console.error(error.message);
      return null;
    });
};

export const getRecipesById = (id) => {
  return fetch(`https://dummyjson.com/recipes/${id}?limit=9`)
    .then((response) => {
      if (!response.ok) {
        throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
      }

      // we've received the 'envelope'
      // it takes time to unpack
      return response.json();
    })
    .then((data) => {
      return data.recipes;
    })
    .catch((error) => {
      console.error(error.message);
      return null;
    });
};

