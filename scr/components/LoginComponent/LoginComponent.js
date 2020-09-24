import React from 'react';
import {useState} from 'react';
import {Container, Header, Content, Form, Item, Input, Text, Button} from 'native-base';


export const Login=({navigation, route})=>{
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");
    
    const onUserNameChange = (text)=>{
        setuserName(text);
    }

    const onPasswordChange = (text)=>{
        setpassword(text);
    }

    const onSubmit = ()=>{
      route.params.logIn();
      console.log("login")
    }

    return(
    <Container>
        <Header />
        <Content>
          <Text>Please Log In!</Text>
          <Form>
            <Item>
              <Input placeholder="Username" value={userName} onChangeText={(text)=>onUserNameChange(text)}/>
            </Item>
            <Item last>
              <Input secureTextEntry placeholder="Password" value={password} onChangeText={(text)=>onPasswordChange(text)}/>
            </Item>
            <Item last>
            <Button onPress={onSubmit}>
                <Text>Log in</Text>
            </Button>
            </Item>
          </Form>
        </Content>
      </Container>
      )
}
