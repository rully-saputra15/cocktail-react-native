import React from "react";
import { Center, extendTheme, NativeBaseProvider, } from "native-base";
import CocktailApplication from "./src/CocktailApplication";
import { SafeAreaProvider } from "react-native-safe-area-view";
import AppLoading from 'expo-app-loading';
import { useFonts,Rubik_300Light, Rubik_300Light_Italic, Rubik_400Regular,Rubik_400Regular_Italic,Rubik_500Medium,Rubik_500Medium_Italic,Rubik_700Bold,Rubik_700Bold_Italic } from '@expo-google-fonts/rubik';
import { State } from "./src/stateManagement/state";
import {persistReducer, persistStore} from "redux-persist";
import thunkMiddleware from "redux-thunk";
import {PersistConfig} from "redux-persist/es/types";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { reducers } from "./src/stateManagement/reducer";
import { applyMiddleware, createStore } from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import logger from "redux-logger";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// Define the config
const config = {
  // useSystemColorMode: false,
  // initialColorMode: "dark",
  dependencies: {
    'linear-gradient': require('expo-linear-gradient').LinearGradient
  }
};

// extend the theme
const reducerPersisConfig: PersistConfig<State> = {
  key:'cocktail',
  storage: AsyncStorage,
  blacklist: ["data", "control", "session"],
  stateReconciler: autoMergeLevel2
}
const middleWare = __DEV__ ?
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    logger
  ))
  :
  applyMiddleware(
    thunkMiddleware
  )

const persistedReducer = persistReducer(reducerPersisConfig, reducers)
const store = createStore(persistedReducer, middleWare)
const persistor = persistStore(store)
export const theme = extendTheme(
  {
    fontConfig:{
      Rubik:{
        100:{
          normal:'Rubik_300Light',
          italic:'Rubik_300Light_Italic'
        },
        200:{
          normal:'Rubik_400Regular',
          italic:'Rubik_400Regular_Italic'
        },
        300:{
          normal:'Rubik_500Medium',
          italic:'Rubik_500Medium_Italic'
        },
        400:{
          normal:'Rubik_700Bold',
          italic:'Rubik_700Bold_Italic'
        }
      }
    },
    fonts:{
      heading:'Rubik',
      body:'Rubik',
      mono:'Rubik'
    },
  }
  );

const App = () => {
  let [fontsLoaded] = useFonts({
    Rubik_300Light,
    Rubik_300Light_Italic,
    Rubik_400Regular,
    Rubik_400Regular_Italic,
    Rubik_500Medium,
    Rubik_500Medium_Italic,
    Rubik_700Bold,
    Rubik_700Bold_Italic
  })
  if (!fontsLoaded){
    return <AppLoading/>
  } else{
    return (
      <React.Fragment>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <NativeBaseProvider theme={theme} config={config}>
              <SafeAreaProvider>
                <CocktailApplication/>
              </SafeAreaProvider>
            </NativeBaseProvider>
          </PersistGate>
        </Provider>
      </React.Fragment>

    );
  }

}

export default App
