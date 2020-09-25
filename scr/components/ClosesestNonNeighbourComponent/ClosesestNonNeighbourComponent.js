import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Header, Content, Form, Item, Input, H1, H2, H3, Text , Button, Toast} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { findNearestNonNeighbourAction } from "../../redux/actions/searchActions";
import { resetNearestNonNeighbourAction } from "../../redux/actions/resetActions";

export const ClosesestNonNeighbour=()=>{
    const [country, setcountry] = useState("");

    const closestCountry = useSelector(state=>state.nearestReducer.nearest);
    const error = useSelector(state => state.nearestReducer.error);



    const state = useSelector(state => state);

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(resetNearestNonNeighbourAction());
            setcountry("");
        }
    }, [dispatch])

    const onSubmit = ()=>{
        dispatch(findNearestNonNeighbourAction(country));
    }

    return(
        

        <Container>
            <H1>
            Closesest Neighbour
            </H1>
            {closestCountry? (<H1>{closestCountry.name}</H1>):(<H2>{error}</H2>)}
            <Form>
            <Item>
              <Input placeholder="Country" value={country} onChangeText={(text)=>{setcountry(text)}}/>
            </Item>
            <Button onPress={onSubmit}>
                <Text>Get Closesest Non Neighbour</Text>
            </Button>
          </Form>
        </Container>
    )
}