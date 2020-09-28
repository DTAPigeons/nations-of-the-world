import React from 'react';
import {useState} from 'react';
import {Container, Grid, Col, Row, Content, Form, Item, Input, Text, Button} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {logInAction} from '../../redux/actions/authActions';
import {useButtonTimeOut} from "../../hooks/TimeOutButtonHook";
import {ErrorComponent} from "../Errors/ErrorComponent";

export const Login = () => {
    const [userName, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [isEnabled, timeOutCallBack, setReEnable] = useButtonTimeOut(true, false);

    const error = useSelector(state => state.authReducer.error);

    const dispatch = useDispatch();

    const onUserNameChange = (text) => {
        setUsername(text);
    }

    const onPasswordChange = (text) => {
        setPassword(text);
    }

    const onSubmit = () => {
        if (!isEnabled) { return }
        timeOutCallBack();
        dispatch(logInAction(userName, password));

    }

    const renderError = () => {
        if (error && error !== '') {
            if (!isEnabled) { setReEnable();}
            return (
                <ErrorComponent error={error}/>)
        }
    }

    return (
        <Container>
            <Content>
                <Grid>
                    <Col style={{justifyContent: 'center', flexDirection: 'column'}}>
                        <Row style={{alignItems: 'center', flexDirection: 'column', backgroundColor: 'powderblue'}}>
                        </Row>
                        {renderError()}
                        <Row style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            marginBottom: 20,
                            marginLeft: 10,
                            marginRight: 20,
                            marginTop: 20
                        }}>
                            <Col>
                                <Form>
                                    <Item style={{marginBottom: 20}}>
                                        <Input placeholder="Username:admin" value={userName}
                                               onChangeText={(text) => onUserNameChange(text)}/>
                                    </Item>
                                    <Item>
                                        <Input secureTextEntry placeholder="Password:123" value={password}
                                               onChangeText={(text) => onPasswordChange(text)}/>
                                    </Item>
                                </Form>
                            </Col>
                        </Row>
                        <Row style={{alignItems: 'center', flexDirection: 'column', marginTop: 20, flex: 2}}>
                            <Col>
                                <Button disabled={!isEnabled} onPress={onSubmit}>
                                    <Text>Log in</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Grid>
            </Content>
        </Container>
    )
}
