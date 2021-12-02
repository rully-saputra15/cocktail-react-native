import React, { useEffect } from "react"
import { DrinkDetail, State } from "../stateManagement/state";
import { connect, useDispatch } from "react-redux";
import { CocktailDetailScreen } from "../screens/CocktailDetailScreen";
import { useRoute } from "@react-navigation/native";
import { fetchDrinkDetail } from "../actions/actions";

interface CocktailDetailScreenContainerProps {
  drinkDetail: DrinkDetail
}

const mapStateToProps = (state: State) => {
  return{
    drinkDetail: state.control.drinkDetail
  }
}
const CocktailDetailScreenContainer = (props: CocktailDetailScreenContainerProps) => {
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const cocktailId = route.params ? route.params.cocktailId : "";
  const drinkDetail = props.drinkDetail;

  useEffect(() => {
    dispatch(fetchDrinkDetail(cocktailId))
  },[cocktailId])

  return <CocktailDetailScreen drinkDetail={drinkDetail}/>
}

export default connect(mapStateToProps)(CocktailDetailScreenContainer)
