import React from 'react';
import {useState, useEffect} from 'react';
import {
    Container,
    Content,
    Form,
    Item,
    Input,
    Text,
    Button,
    Grid,
    Col,
    Row,
    Footer
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {Keyboard} from 'react-native';
import {findTimeZoneRangeAction} from "../../redux/actions/searchActions";
import {useButtonTimeOut} from "../../hooks/TimeOutButtonHook";
import {ErrorComponent} from "../Errors/ErrorComponent";
import {ResultListComponent} from "../ResultListComponent/ResultLIstComponent";

export const TimeZoneRange = () => {
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    const range = useSelector(state => state.timeZoneRangeReducer.range);
    const error = useSelector(state => state.timeZoneRangeReducer.error);

    const [isEnabled, timeOutCallBack] = useButtonTimeOut(true, true);

    const [showFooter, setShowFooter] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", hideOnKeyBoardFooter);
        Keyboard.addListener("keyboardDidHide", showOnKeyBoardFooter);
        return () => {
            Keyboard.removeAllListeners("keyboardDidShow");
            Keyboard.removeAllListeners("keyboardDidHide");
        };
    }, [setShowFooter, hideOnKeyBoardFooter, showOnKeyBoardFooter]);


    const hideOnKeyBoardFooter = () => {
        setShowFooter(false);
    }

    const showOnKeyBoardFooter = () => {
        setShowFooter(true)
    }

    const onSubmit = () => {
        if (!isEnabled) {return}
        timeOutCallBack();
        dispatch(findTimeZoneRangeAction(from, to));
    }

    const renderRange = () => {
        if (!range || range.length === 0) {
            return;
        }

        return (<ResultListComponent range={range} headerText="Results"/>);
    }


    const renderError = () => {
        if (error && error !== '') {
            return (<ErrorComponent error={error}/>);
        }
    }

    return (
        <Container>
            <Content>
                <Grid>
                    <Col style={{justifyContent: 'center', flexDirection: 'column'}}>
                        {renderError()}
                        <Row style={{
                            alignItems: 'center',
                            flexDirection: 'row',
                            margin: 20,
                            marginBottom: 20,
                            marginLeft: 5,
                            marginRight: 20,
                            marginTop: 20
                        }}>
                            <Col>
                                <Form>
                                    <Item style={{marginBottom: 10}}>
                                        <Input autoCapitalize='characters' maxLength={9} placeholder="From" value={from}
                                               onChangeText={(text) => {setFrom(text)}}/>
                                    </Item>
                                    <Item>
                                        <Input autoCapitalize='characters' maxLength={9} placeholder="To" value={to}
                                               onChangeText={(text) => {setTo(text)}}/>
                                    </Item>

                                </Form>
                            </Col>
                        </Row>
                        <Row style={{alignItems: 'center', flexDirection: 'column', flex: 2}}>
                            <Col>
                                <Button disabled={!isEnabled} onPress={onSubmit}>
                                    <Text>Get Time Zone Range</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Grid>
            </Content>
            <Footer style={showFooter ? {height: 250, backgroundColor: "white"} : {height: 0}}>
                {renderRange()}
            </Footer>
        </Container>
    )
}