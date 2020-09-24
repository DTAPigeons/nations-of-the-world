import React from 'react';
import { Header, Content, Container, Text, Title, Footer } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Distance } from '../DistanceComponent/DistanceComponent';
import { ClosesestNeighbour } from '../ClosesestNeighbourComponent/ClosesestNeighbourComponent';
import { TimeZoneRange} from '../TimeZoneRangeComponent/TimeZoneRangeComponent';
import { SearchCountries } from '../SearchCountriesComponent/SearchCountriesComponent';

export const Layout =()=>{

    const Tab = createBottomTabNavigator();

    return(
        <Container>            
        <Header>
        <Title>Nations of the world</Title>
        </Header>
        <Tab.Navigator>
            <Tab.Screen name="Distance" component={Distance} />
            <Tab.Screen name="ClosesestNeighbour" component={ClosesestNeighbour} />
            <Tab.Screen name="TimeZoneRange" component={TimeZoneRange} />
            <Tab.Screen name="SearchCountries" component={SearchCountries} />
        </Tab.Navigator>
        </Container>
    )
}
