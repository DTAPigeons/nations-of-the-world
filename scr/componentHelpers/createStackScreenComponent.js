import * as React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

export const createStackScreenComponent = (Component) => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen options={{headerShown: true}} component={Component()} />
    </Stack.Navigator>
  );
};
