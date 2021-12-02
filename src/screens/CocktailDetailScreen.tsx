import React from "react"
import { Box } from "native-base";
import { DrinkDetail } from "../stateManagement/state";

interface CocktailDetailScreenProps {
  drinkDetail: DrinkDetail
}
export const CocktailDetailScreen: React.FC<CocktailDetailScreenProps> = (props: CocktailDetailScreenProps) => {
  return(
    <Box>
      Detail
    </Box>
  )
}
