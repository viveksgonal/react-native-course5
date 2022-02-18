/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
 import {StyleSheet, Text, View} from 'react-native';
import {LogBox} from 'react-native';
import {useScreens} from 'react-native-screens';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import mealsReducer from './store/reducers/meals';

useScreens();
const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);
import MealsNavigator from './navigation/MealsNavigator';
export default function App() {
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
  ]);
  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
}

