import React from 'react';
import {Container} from 'native-base';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Distance} from '../DistanceComponent/DistanceComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DistanceComponentWrapper} from "../DistanceComponent/DistanceComponentWraper";
import {ClosesestNonNeighbourComponentWrapper} from "../ClosesestNonNeighbourComponent/ClosesestNonNeighbourComponentWrapper";
import {SearchCountriesComponentWrapper} from "../SearchCountriesComponent/SearchCountriesComponentWrapper";
import {TimeZoneRangeComponentWrapper} from "../TimeZoneRangeComponent/TimeZoneRangeComponentWrapper";

export const Layout = () => {

    const Tab = createBottomTabNavigator();

    return (
        <Container>
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {

                        let iconName;

                        switch (route.name) {
                            case "Distance":
                                iconName = "analytics-outline";
                                break;
                            case "Closest":
                                iconName = "earth-outline";
                                break;
                            case "Time Zone":
                                iconName = "stopwatch-outline";
                                break;
                            case "Search":
                                iconName = "search-circle";
                                break;
                            default:
                                iconName = analytics - outline;
                                break;
                        }

                        // You can return any component that you like here!
                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                })}
                tabBarOptions={{
                    keyboardHidesTabBar: true
                }}
            >
                <Tab.Screen name="Distance" component={DistanceComponentWrapper}/>
                <Tab.Screen name="Closest" component={ClosesestNonNeighbourComponentWrapper}/>
                <Tab.Screen name="Time Zone" component={TimeZoneRangeComponentWrapper}/>
                <Tab.Screen name="Search" component={SearchCountriesComponentWrapper}/>
            </Tab.Navigator>
        </Container>
    )
}
