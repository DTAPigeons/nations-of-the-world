import React from 'react';
import {TimeZoneRange} from './TimeZoneRangeComponent';
import {createStackNavigator} from '@react-navigation/stack';

export const TimeZoneRangeComponentWrapper = () => {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{title: 'Time Zone Range'}}
                name="TimeZoneRange"
                component={TimeZoneRange}
            />
        </Stack.Navigator>
    );
};
