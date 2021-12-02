import { Drink, DrinkDetail } from "./state";

export const formatDrinks = (unformattedDrinks: any[]): Drink[] => {
  let formattedDrinks: Drink[] = [];
  unformattedDrinks.forEach((drink: any) => {
    formattedDrinks.push({
      id: drink.idDrink,
      thumbnail: drink.strDrinkThumb,
      title: drink.strDrink
    })
  })
  return formattedDrinks
}

export const formatDrinkDetail = (unformattedDrinkDetail : any): DrinkDetail => {
  return {
    id: unformattedDrinkDetail.idDrink,
    title: unformattedDrinkDetail.strDrink,
    alternateDrink: unformattedDrinkDetail.strDrinkAlternate,
    tags: unformattedDrinkDetail.strTags,
    category: unformattedDrinkDetail.strCategory,
    glass: unformattedDrinkDetail.strGlass,
    instructions: unformattedDrinkDetail.strInstructions,
    thumbnail: unformattedDrinkDetail.strDrinkThumb,
    ingredient: [],
  }
}

export const formatDrinkIngredients = (unformattedingredients: any): string[] => {
  let ingredients: string[] = [];
  let i = 1;
  while(1){
    const key = `strIngredient${i}`;
    if(unformattedingredients[key] == null) break;
    ingredients.push(unformattedingredients[key])
  }
  return ingredients
}
