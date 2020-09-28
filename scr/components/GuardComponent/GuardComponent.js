import React from 'react';
import {useState, useEffect} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Login} from '../LoginComponent/LoginComponent';
import {Layout} from '../LayoutComponent/LayoutComponent';
import {useDispatch, useSelector} from 'react-redux';
import {logOutAction} from "../../redux/actions/authActions";

export const Guard = ({navigation, route}) => {

    const isLoggedIn = useSelector(state => state.authReducer.isLogedin);
    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(logOutAction());
        }
    }, [])

    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            {!isLoggedIn ? (<Stack.Screen options={{title: "Log in"}} name="Log in" component={Login}/>) : (
                <Stack.Screen options={{headerShown: false}} name="Home" component={Layout}/>)}
        </Stack.Navigator>

    )
}