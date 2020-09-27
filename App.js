/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import axios from 'axios';
import { Root } from "native-base";

import { Guard } from './scr/components/GuardComponent/GuardComponent';
import InformationExtractor from "./scr/queries/InformationExtractor";
import react from 'react';
import { Provider } from 'react-redux';
import { store } from "./scr/redux/store";

const App = () => {

  const Stack = createStackNavigator();

  return (
    <>
    <Root>
      <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen options={{title: "Countries", headerShown:false}} name="Guard" component={Guard} initialParams={{loggedIn: false}}/>
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
      </Root>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
