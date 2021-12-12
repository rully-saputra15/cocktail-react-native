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
    ingredients: formatDrinkIngredients(unformattedDrinkDetail),
    measures:formatDrinkMeasure(unformattedDrinkDetail)
  }
}

export const formatDrinkIngredients = (unformattedingredients: any): string[] => {
  let ingredients: string[] = [];
  for(let i = 1 ; i <= 15 ; i++){
    ingredients.push(unformattedingredients['strIngredient' + i])
  }
  return ingredients
}

export const formatDrinkMeasure = (unformattedingredients: any): string[] => {
  let ingredients: string[] = [];
  for(let i = 1 ; i <= 15 ; i++){
    ingredients.push(unformattedingredients['strMeasure' + i])
  }
  return ingredients
}

