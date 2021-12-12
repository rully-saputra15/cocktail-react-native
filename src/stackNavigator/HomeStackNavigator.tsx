import React from "react";
import HomeContainer from "../containers/HomeContainer";
import CocktailDetailScreenContainer from "../containers/CocktailDetailScreenContainer";
import { createStackNavigator } from "@react-navigation/stack";


export const HomeStackNavigator = ({navigation} : any) => {
  const Stack = createStackNavigator()
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeContainer} options={{headerShown:false}}/>
      <Stack.Screen name="CocktailDetailScreen"
                    component={CocktailDetailScreenContainer}
                    options={{headerTitle:'',headerBackTitleVisible:false, headerTransparent:true}}/>
    </Stack.Navigator>
  )
}
