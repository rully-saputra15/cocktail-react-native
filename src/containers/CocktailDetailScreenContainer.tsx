import React, { useEffect } from "react"
import { DrinkDetail, State } from "../stateManagement/state";
import { connect, useDispatch } from "react-redux";
import { CocktailDetailScreen } from "../screens/CocktailDetailScreen";
import { useRoute } from "@react-navigation/native";
import { fetchDrinkDetail } from "../actions/actions";

interface CocktailDetailScreenContainerProps {
  drinkDetail: DrinkDetail;
  isFetchingDrinkDetail: boolean;
}

const mapStateToProps = (state: State) => {
  return{
    drinkDetail: state.control.drinkDetail,
    isFetchingDrinkDetail: state.session.isFetchingDrinkDetail
  }
}
const CocktailDetailScreenContainer = (props: CocktailDetailScreenContainerProps) => {
  const route = useRoute<any>();
  const dispatch = useDispatch();
  const cocktailId = route.params ? route.params.cocktailId : "";
  const drinkDetail = props.drinkDetail;
  const isFetchingDrinkDetail = props.isFetchingDrinkDetail;

  useEffect(() => {
    dispatch(fetchDrinkDetail(cocktailId))
  },[cocktailId])

  return <CocktailDetailScreen drinkDetail={drinkDetail} isFetchingDrinkDetail={isFetchingDrinkDetail}/>
}

export default connect(mapStateToProps)(CocktailDetailScreenContainer)
