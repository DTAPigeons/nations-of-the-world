import React from 'react';
import { Header, Content, Container, Text, Title, Footer } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Distance } from '../DistanceComponent/DistanceComponent';
import { ClosesestNonNeighbour } from '../ClosesestNonNeighbourComponent/ClosesestNonNeighbourComponent';
import { TimeZoneRange} from '../TimeZoneRangeComponent/TimeZoneRangeComponent';
import { SearchCountries } from '../SearchCountriesComponent/SearchCountriesComponent';

export const Layout =()=>{

    const Tab = createBottomTabNavigator();

    return(
        <Container>            
        <Tab.Navigator>
            <Tab.Screen name="Distance" component={Distance} />
            <Tab.Screen name="ClosesestNeighbour" component={ClosesestNonNeighbour} />
            <Tab.Screen name="TimeZoneRange" component={TimeZoneRange} />
            <Tab.Screen name="SearchCountries" component={SearchCountries} />
        </Tab.Navigator>
        </Container>
    )
}
