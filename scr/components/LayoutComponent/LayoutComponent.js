import React from 'react';
import { Header, Content, Container, Text, Title, Footer } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Distance } from '../DistanceComponent/DistanceComponent';
import { ClosesestNonNeighbour } from '../ClosesestNonNeighbourComponent/ClosesestNonNeighbourComponent';
import { TimeZoneRange} from '../TimeZoneRangeComponent/TimeZoneRangeComponent';
import { SearchCountries } from '../SearchCountriesComponent/SearchCountriesComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const Layout =()=>{

    const Tab = createBottomTabNavigator();

    return(
        <Container>            
        <Tab.Navigator 
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {  
              // You can return any component that you like here!
              return <Ionicons name={"search-circle"} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
              keyboardHidesTabBar:true
          }}
        >
            <Tab.Screen name="Distance" component={Distance} />
            <Tab.Screen name="Closesest" component={ClosesestNonNeighbour} />
            <Tab.Screen name="Time Zone" component={TimeZoneRange} />
            <Tab.Screen name="Search" component={SearchCountries} />
        </Tab.Navigator>
        </Container>
    )
}
