import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Header, Content, Form, Item, Input, H1, H2, H3, Text , Button, Card, CardItem, List, ListItem} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, View } from 'react-native';
import {  findTimeZoneRangeAction } from "../../redux/actions/searchActions";
import { resetTimeZoneRangeAction } from "../../redux/actions/resetActions";

export const TimeZoneRange=()=>{
    const [from, setfrom] = useState("");
    const [to, setto] = useState("");

    const range = useSelector(state => state.timeZoneRangeReducer.range);
    const error = useSelector(state => state.timeZoneRangeReducer.error);

    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(resetTimeZoneRangeAction());
        }
    }, [dispatch])

    const onSubmit = ()=>{
        dispatch(findTimeZoneRangeAction(from,to));
    }

    const renderRange = ()=>{
        if(!range || range.length===0){
            return
        }
        else{
            const renderItem = ({item})=>
                (<View><Text>{item}</Text></View>)
            ;
            return(
                <FlatList
                data = {range}
                renderItem= {renderItem}
                keyExtractor = {item=>item}
                />
            )
        }
    }

    return(
        <Container>
            <H1>
            Time Zone Range
            </H1>
            <H2>{error}</H2>
            <Form>
            <Item>
              <Input placeholder="From" value={from} onChangeText={(text)=>{setfrom(text)}}/>
            </Item>
            <Item last>
              <Input placeholder="To" value={to} onChangeText={(text)=>{setto(text)}}/>
            </Item>
            <Button onPress={onSubmit}>
                <Text>Get Time Zone Range</Text>
            </Button>
          </Form>
          {renderRange()}
        </Container>
    )
}