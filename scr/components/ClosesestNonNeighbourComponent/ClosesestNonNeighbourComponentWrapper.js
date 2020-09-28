import React from 'react';
import {ClosesestNonNeighbour} from './ClosesestNonNeighbourComponent';
import {createStackNavigator} from '@react-navigation/stack';

export const ClosesestNonNeighbourComponentWrapper = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{title: 'Closest Non-Neighbour'}}
                name="Closest"
                component={ClosesestNonNeighbour}
            />
        </Stack.Navigator>
    );
};
