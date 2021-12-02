import { combineReducers } from "redux";
import { ControlState, DataState, SessionState, State } from "./state";
import { initialControlState, initialDataState, initialSessionState } from "./initialState";
import * as actions from "../actions/actions"
export const dataReducer = (state: DataState = initialDataState, action: any) => {
  switch(action.type){
    case actions.UPDATE_ALL_DRINKS:
      return Object.assign({}, state, {
        allDrinks: action.payload
      })
    default:
      return state;
  }
}

export const controlReducer = (state: ControlState = initialControlState, action: any) => {
  switch(action.type){
    case actions.UPDATE_DRINK_DETAIL:
      return Object.assign({}, state, {
        drinkDetail: action.payload
      })
    default:
      return state;
  }
}

export const sessionReducer = (state: SessionState = initialSessionState, action: any) => {
  switch(action.type){
    case actions.UPDATE_FETCHING_ALL_DRINKS_STATUS:
      return Object.assign({}, state, {
        isFetchingAllDrinks: action.payload
      })
    case actions.UPDATE_FETCHING_DRINK_DETAIL:
      return Object.assign({}, state, {
        isFetchingDrinkDetail: action.payload
      })
    default:
      return state;
  }
}

export const reducers = combineReducers<State>({
  data: dataReducer,
  control: controlReducer,
  session: sessionReducer
})

