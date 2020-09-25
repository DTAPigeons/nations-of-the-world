import React from 'react';
import {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Login} from '../LoginComponent/LoginComponent';
import {Layout} from '../LayoutComponent/LayoutComponent';
import {AppContext} from '../../context/AppContext';
import { useDispatch, useSelector } from 'react-redux';

export const Guard = ({ navigation, route})=>{

    const isLogedin =  useSelector(state => state.autReducer.isLogedin);


    const Stack = createStackNavigator();

    const logIn=()=>{
    }

    return (
              <Stack.Navigator>
              {!isLogedin? (<Stack.Screen name="Log in" component={Login} initialParams={{logIn:logIn}}/>):(<Stack.Screen name="Home" component={Layout}/>)}
              </Stack.Navigator> 

    )
}