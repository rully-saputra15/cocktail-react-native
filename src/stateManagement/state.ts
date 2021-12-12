export interface State {
  data: DataState,
  control: ControlState,
  session: SessionState
}

export interface DataState{
  allDrinks: Drink[]
}

export interface ControlState{
  drinkDetail: DrinkDetail;
}

export interface SessionState{
  isFetchingAllDrinks: boolean;
  isFetchingDrinkDetail: boolean;
}

export interface Drink {
  id: string
  title: string;
  thumbnail: string;
}
export interface DrinkDetail {
  id: string;
  title: string;
  alternateDrink: string;
  tags: string;
  category: string;
  glass: string;
  instructions: string;
  thumbnail: string;
  ingredients: string[];
  measures: string[];
}
