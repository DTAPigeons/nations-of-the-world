import React from 'react';
import {useState} from 'react';
import {Container, Header, Content, Form, Item, Input, H1, H2, H3, Text , Button, Toast} from 'native-base';

export const Distance = ()=>{
    const [firstCountry, setfirstCountry] = useState("");
    const [secondCountry, secondCountryCountry] = useState("");

    const [distance, setdistance] = useState(50);

    const onSubmit = ()=>{
        Toast.show({
        text: "Distance: " + distance + " KM",
        buttonText: "Okay",
        position: "bottom"
    })
}

    return(
        <Container>
            <Content>
            <H1>
                Distance
            </H1>
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