import React from 'react';
import {useState} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from '../LoginComponent/LoginComponent';
import {Layout} from '../LayoutComponent/LayoutComponent';

export const Guard = ({ navigation, route})=>{

    const [isLogedIn, setisLogedIn] = useState(route.params.loggedIn);


    const Stack = createStackNavigator();

    const logIn=()=>{
        setisLogedIn(true);
    }

    return (
              <Stack.Navigator>
              {!isLogedIn? (<Stack.Screen name="Log in" component={Login} initialParams={{logIn:logIn}}/>):(<Stack.Screen name="Home" component={Layout}/>)}
              </Stack.Navigator> 

    )
}