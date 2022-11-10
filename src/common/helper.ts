import { Cocktail, Ingredients } from "./types";

export function parseIngredients(cocktail: Cocktail | undefined) {
  const ingredients = [];
  if (cocktail) {
    for (let i = 1; i < 16; i++) {
      const ingredient = cocktail[`strIngredient${i}` as keyof Cocktail];
      const measure = cocktail[`strMeasure${i}` as keyof Cocktail];
      if (ingredient) {
        ingredients.push({ ingredient, measure });
      }
    }
  }
  return ingredients;
}

export function titleCase(str: string | null ) {
  if (str) {
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
  } else {
    return "";
  }
}

export function cutIngredients(
  ingredients: Ingredients[],
  length: number,
  type: string
) {
  if (ingredients.length > length) {
    if (type === "featured") {
      let newIngredients = ingredients.filter(
        (item) => !(item.ingredient.length > 9)
      );
      newIngredients = newIngredients.slice(0, length);
      return newIngredients;
    } else {
      let newIngredients = ingredients.slice(0, length - 1);
      newIngredients.push({ ingredient: "...", measure: "" });
      return newIngredients;
    }
  } else {
    return ingredients;
  }
}