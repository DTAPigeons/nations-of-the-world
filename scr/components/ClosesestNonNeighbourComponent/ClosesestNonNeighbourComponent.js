import React from 'react';
import {useState} from 'react';
import {Container, Header, Content, Form, Item, Input, H1, H2, H3, Text , Button, Toast} from 'native-base';

export const ClosesestNonNeighbour=()=>{
    const [country, setcountry] = useState("");

    const [closestCountry, setclosestCountry] = useState("Macedonia");

    const onSubmit = ()=>{
        Toast.show({
            text: closestCountry,
            buttonText: "Okay",
            position: "bottom"
        })
    }

    return(
        

        <Container>
            <H1>
            Closesest Neighbour
            </H1>
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