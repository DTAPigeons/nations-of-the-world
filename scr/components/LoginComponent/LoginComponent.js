import React from 'react';
import {useState, useContext} from 'react';
import {Container, Grid, Col, Row, Content, Form, Item, Input, Text, Button, H1, H2} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {logInAction} from '../../redux/actions/autActions';
import {useButtonTimeOut} from "../../hooks/TimeOutButtonHook";
import {ErrorComponent} from "../Errors/ErrorComponent";

export const Login = ({navigation, route}) => {
    const [userName, setuserName] = useState("");
    const [password, setpassword] = useState("");

    const [isEnabled, timeOutCallBack, setReEnable] = useButtonTimeOut(true, false);

    const error = useSelector(state => state.autReducer.error);

    const dispatch = useDispatch();

    const onUserNameChange = (text) => {
        setuserName(text);
    }

    const onPasswordChange = (text) => {
        setpassword(text);
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
                <ErrorComponent error={error}></ErrorComponent>)
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
                                        <Input placeholder="Username" value={userName}
                                               onChangeText={(text) => onUserNameChange(text)}/>
                                    </Item>
                                    <Item>
                                        <Input secureTextEntry placeholder="Password" value={password}
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
