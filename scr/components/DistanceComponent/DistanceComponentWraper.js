import React from 'react';
import {Distance} from './DistanceComponent';
import {createStackNavigator} from '@react-navigation/stack';

export const DistanceComponentWrapper = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{title: 'Distance'}}
        name="Distance"
        component={Distance}
      />
    </Stack.Navigator>
  );
};
