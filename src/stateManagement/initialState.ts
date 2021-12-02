import { ControlState, DataState, SessionState } from "./state";

export const initialDataState: DataState = {
  allDrinks: []
}

export const initialControlState: ControlState = {
  drinkDetail : {
    id: "",
    title: "",
    alternateDrink: "",
    tags: "",
    category: "",
    glass: "",
    instructions: "",
    thumbnail: "",
    ingredient: [],
  }
}

export const initialSessionState: SessionState = {
  isFetchingAllDrinks: false,
  isFetchingDrinkDetail: false
}
