import React from 'react';
import {useState} from 'react';
import {Container, Header, Content, Form, Item, Input, H1, H2, H3, Text , Button, Card, CardItem} from 'native-base';

export const TimeZoneRange=()=>{
    const [firstCountry, setfirstCountry] = useState("");
    const [secondCountry, secondCountryCountry] = useState("");

    const [range, setrange] = useState([]);

    const onSubmit = ()=>{
        setrange([{name:"Macedonia"}, {name: "Sumalia"}, {name: "Azurbaijan"}]);
    }

    const renderRange = ()=>{
        console.log("range");
        if(!range && range.length===0){
            return
        }
        else{
            return(
                <Card>
                    {range.map((country)=>{
                        console.log(country.name)
                        return (<CardItem key={country.name}><Text>{country.name}</Text></CardItem>)})}
                </Card>
            )
        }
    }

    return(
        <Container>
            <H1>
            Time Zone Range
            </H1>
            <Form>
            <Item>
              <Input placeholder="First Country" value={firstCountry} onChangeText={(text)=>{setfirstCountry(text)}}/>
            </Item>
            <Item last>
              <Input placeholder="Second Country" value={secondCountry} onChangeText={(text)=>{secondCountryCountry(text)}}/>
            </Item>
            <Button onPress={onSubmit}>
                <Text>Get Time Zone Range</Text>
            </Button>
          </Form>
          {renderRange()}
        </Container>
    )
}