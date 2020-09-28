import React from 'react';
import {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../LoginComponent/LoginComponent';
import {Layout} from '../LayoutComponent/LayoutComponent';
import {useDispatch, useSelector} from 'react-redux';
import {logOutAction} from "../../redux/actions/autActions";

export const Guard = ({navigation, route}) => {

    const isLogedin = useSelector(state => state.autReducer.isLogedin);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(logOutAction());
        }
    }, [])

    const Stack = createStackNavigator();

    const logIn = () => {
    }

    return (
        <Stack.Navigator>
            {!isLogedin ? (<Stack.Screen options={{title: "Log in"}} name="Log in" component={Login}
                                         initialParams={{logIn: logIn}}/>) : (
                <Stack.Screen options={{headerShown: false}} name="Home" component={Layout}/>)}
        </Stack.Navigator>

    )
}