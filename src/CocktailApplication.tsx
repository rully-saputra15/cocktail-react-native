import React from "react"
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import HomeContainer from "./containers/HomeContainer";
import { HomeStackNavigator } from "./stackNavigator/HomeStackNavigator";

interface SoccerApplicationProps {

}


const CocktailApplication = (props: SoccerApplicationProps) => {
  const MainTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'white'
    },
  };
  return      <NavigationContainer theme={MainTheme}>
    <HomeStackNavigator/>
  </NavigationContainer>
}

export default CocktailApplication
