import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Header, Content, Form, Item, Input, H1, H2, H3, Text , Button, Card, CardItem} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, View, SafeAreaView } from 'react-native';
import { findWithCharactersAction } from "../../redux/actions/searchActions";
import { resetWithCharactersAction } from "../../redux/actions/resetActions";

export const SearchCountries=()=>{
    const [searchTerm, setsearchTerm] = useState("");

    const range = useSelector(state => state.charecterSearchReducer.range);
    const error = useSelector(state => state.charecterSearchReducer.error);

    const dispatch = useDispatch();

    useEffect(() => {
        
        return () => {
            dispatch(resetWithCharactersAction());
            setsearchTerm("");
        }
    }, [dispatch])

    const onSubmit = ()=>{
        dispatch(findWithCharactersAction(searchTerm));
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
                <SafeAreaView>
                <FlatList
                data = {range}
                renderItem= {renderItem}
                keyExtractor = {item=>item}
                />
                </SafeAreaView>
                
            )
        }
    }

    return(
        <Container>
            <H1>
            Search
            </H1>
            <H2>{error}</H2>
            <Form>
            <Item>
              <Input placeholder="Search" value={searchTerm} onChangeText={(text)=>{setsearchTerm(text)}}/>
            </Item>
            <Button onPress={onSubmit}>
                <Text>Search</Text>
            </Button>
          </Form>
          {renderRange()}
        </Container>
    )
}