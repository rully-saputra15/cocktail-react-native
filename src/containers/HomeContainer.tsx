import React, { useEffect } from "react";
import HomeScreen from "../screens/HomeScreen";
import { Drink, State } from "../stateManagement/state";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { fetchAllDrinks } from "../actions/actions";
import { useNavigation } from "@react-navigation/native";


interface HomeContainerProps {
  dispatch: ThunkDispatch<{}, {}, AnyAction>;
  allDrink: Drink[]
  isFetchingAllDrink: boolean;
}

const mapStateToProps = (state: State) => {
  return{
      allDrink: state.data.allDrinks,
      isFetchingAllDrink: state.session.isFetchingAllDrinks,
  }
}
const HomeContainer = (props: HomeContainerProps) => {
  const allDrinks = props.allDrink;
  const isFetchingAllDrinks = props.isFetchingAllDrink;
  const dispatch = props.dispatch;
  const navigation = useNavigation<any>();

  useEffect(() => {
    dispatch(fetchAllDrinks());
  },[])
  const handleToNavigateCocktailDetailScreen = (cocktailId: string) => {
    navigation.navigate("CocktailDetailScreen",{
      cocktailId: cocktailId
    })
  }
  return <HomeScreen allDrinks={allDrinks}
                     handleToNavigateCocktailDetailScreen={handleToNavigateCocktailDetailScreen}
                     isFetchingAllDrinks={isFetchingAllDrinks}/>
}

export default connect(mapStateToProps)(HomeContainer);
