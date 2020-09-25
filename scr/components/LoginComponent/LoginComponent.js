import React from 'react';
import {useState, useContext} from 'react';
import {Container,  Grid, Col, Row, Content, Form, Item, Input, Text, Button, H1, H2} from 'native-base';
import { useDispatch, useSelector} from 'react-redux';
import { logInAction } from '../../redux/actions/autActions';


export const Login=({navigation, route})=>{
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");

    const error = useSelector(state => state.autReducer.error);

    const dispatch = useDispatch();
    
    const onUserNameChange = (text)=>{
        setuserName(text);
    }

    const onPasswordChange = (text)=>{
        setpassword(text);
    }

    const onSubmit = ()=>{
      dispatch(logInAction());
      
      
    }

    return(
    <Container>
        <Content>
          <Grid >
            <Row style={{alignItems: 'center',flexDirection: 'column',backgroundColor: 'powderblue'}}>
              <Col><H1>Please Log In!</H1></Col>              
            </Row>
            {error!=='' || 
            <Row style={{alignItems: 'center',flexDirection: 'column',backgroundColor: 'red'}}>
            <Col><H2>{error}</H2></Col>
            </Row>
            }
            
          </Grid>
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
