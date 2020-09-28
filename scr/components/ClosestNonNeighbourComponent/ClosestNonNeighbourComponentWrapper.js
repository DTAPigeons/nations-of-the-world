import React from 'react';
import {ClosestNonNeighbour} from './ClosestNonNeighbourComponent';
import {createStackNavigator} from '@react-navigation/stack';

export const ClosestNonNeighbourComponentWrapper = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{title: 'Closest Non-Neighbour'}}
                name="Closest"
                component={ClosestNonNeighbour}
            />
        </Stack.Navigator>
    );
};
