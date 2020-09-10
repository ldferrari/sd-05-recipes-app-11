export const ApiSearchMealByName = (name) => {
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`).then((response) =>
    response
      .json()
      .then((meal) => meal.meals)
      .catch((error) => error)
  );
};

export const ApiSearchByFirstLetter = (letter) => {
  return fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`).then((response) =>
    response
      .json()
      .then((meal) => meal.meals)
      .catch((error) => error)
  );
};

export const ApiSearchByMainIngredient = (mainIngredient) => {
  return fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${mainIngredient}`).then(
    (response) =>
      response
        .json()
        .then((meal) => meal.meals)
        .catch((error) => error)
  );
};
