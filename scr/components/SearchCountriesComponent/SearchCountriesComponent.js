import React from 'react';
import {useState} from 'react';
import {Container, Header, Content, Form, Item, Input, H1, H2, H3, Text , Button, Card, CardItem} from 'native-base';

export const SearchCountries=()=>{
    const [searchTerm, setsearchTerm] = useState("");

    const [range, setrange] = useState([]);

    const onSubmit = ()=>{
        setrange([{name:"Macedonia"}, {name: "Sumalia"}, {name: "Azurbaijan"}]);
    }

    const renderRange = ()=>{
        if(!range && range.length===0){
            return
        }
        else{
            return(
                <Card>
                    {range.map((country)=>{return (<CardItem key={country.name}><Text>{country.name}</Text></CardItem>)})}
                </Card>
            )
        }
    }

    return(
        <Container>
            <H1>
            Search
            </H1>
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