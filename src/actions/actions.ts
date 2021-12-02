import { Drink, DrinkDetail } from "../stateManagement/state";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import axios from "axios";
import { formatDrinkDetail, formatDrinks } from "../stateManagement/frappeResponse";

export const UPDATE_ALL_DRINKS = "UPDATE_ALL_DRINKS"
export const UPDATE_FETCHING_ALL_DRINKS_STATUS = "UPDATE_FETCHING_ALL_DRINKS_STATUS"
export const UPDATE_DRINK_DETAIL = "UPDATE_DRINK_DETAIL";
export const UPDATE_FETCHING_DRINK_DETAIL = "UPDATE_FETCHING_DRINK_DETAIL";

export const updateAllDrinks = (drinks: Drink[]) => {
  return {type: UPDATE_ALL_DRINKS, payload: drinks}
}

export const updateDrinkDetail = (drinkDetail: DrinkDetail) => {
  return {type: UPDATE_DRINK_DETAIL, payload: drinkDetail}
}

export const updateFetchingAllDrinks = (status: boolean) => {
  return {type: UPDATE_FETCHING_ALL_DRINKS_STATUS, payload: status}
}

export const updateFetchingDrinkDetail = (isFetching: boolean) => {
  return {type: UPDATE_FETCHING_DRINK_DETAIL, payload: isFetching}
}

export const fetchAllDrinks = () => {
  return(dispatch: ThunkDispatch<any, any, AnyAction>) => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic"

    dispatch(updateFetchingAllDrinks(true))
    axios({
      method: 'get',
      url: encodeURI(url),
      validateStatus: () => true
    })
      .then((response: any) => {
        if(response.status === 200){
          dispatch(updateAllDrinks(formatDrinks(response.data.drinks)))
          dispatch(updateFetchingAllDrinks(false))
        }
      })
  }
}

export const fetchDrinkDetail = (idDrink: string) => {
  return(dispatch: ThunkDispatch<any, any, AnyAction>) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`

    dispatch(updateFetchingDrinkDetail(true))
    axios({
      method: 'get',
      url: encodeURI(url),
      validateStatus: () => true
    })
      .then((response: any) => {
        if(response.status === 200){
          dispatch(updateDrinkDetail(formatDrinkDetail(response.data.drinks[0])))
          dispatch(updateFetchingDrinkDetail(false))
        }
      })
  }
}
