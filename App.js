/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Root} from "native-base";
import {Guard} from './scr/components/GuardComponent/GuardComponent';
import {Provider} from 'react-redux';
import {store} from "./scr/redux/store";

const App = () => {

    const Stack = createStackNavigator();

    return (
        <>
            <Root>
                <Provider store={store}>
                    <NavigationContainer>
                        <Stack.Navigator>
                            <Stack.Screen options={{title: "Countries", headerShown: false}} name="Guard"
                                          component={Guard} initialParams={{loggedIn: false}}/>
                        </Stack.Navigator>
                    </NavigationContainer>
                </Provider>
            </Root>
        </>
    );
};

export default App;
