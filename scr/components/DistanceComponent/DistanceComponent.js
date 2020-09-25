import React from 'react';
import {useState} from 'react';
import {Container, Header, Content, Form, Item, Input, H1, H2, H3, Text , Button, Toast} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { findDistanceAction } from "../../redux/actions/searchActions";

export const Distance = ()=>{
    const [firstCountry, setfirstCountry] = useState("");
    const [secondCountry, secondCountryCountry] = useState("");

    const distance  = useSelector(state => state.distanceReducer.distance);
    const error = useSelector(state => state.distanceReducer.error);

    const dispatch = useDispatch();

    const onSubmit = ()=>{
        dispatch(findDistanceAction(firstCountry,secondCountry));
}

    return(
        <Container>
            <Content>
            <H1>
                Distance 
            </H1>
            {distance? (<H1>{distance+" KM"}</H1>):(<H2>{error}</H2>)}
            <Form>
            <Item>
              <Input placeholder="First Country" value={firstCountry} onChangeText={(text)=>{setfirstCountry(text)}}/>
            </Item>
            <Item last>
              <Input placeholder="Second Country" value={secondCountry} onChangeText={(text)=>{secondCountryCountry(text)}}/>
            </Item>
            <Button onPress={onSubmit}>
                <Text>Get Distance</Text>
            </Button>
          </Form>
            </Content>
        </Container>
    )
}