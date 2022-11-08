import { Cocktail } from "./types";

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
