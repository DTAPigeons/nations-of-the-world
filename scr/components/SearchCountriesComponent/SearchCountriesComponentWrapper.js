import React from 'react';
import {SearchCountries} from './SearchCountriesComponent';
import {createStackNavigator} from '@react-navigation/stack';

export const SearchCountriesComponentWrapper = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{title: 'Search'}}
                name="Search"
                component={SearchCountries}
            />
        </Stack.Navigator>
    );
};
