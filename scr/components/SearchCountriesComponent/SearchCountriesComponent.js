import React from 'react';
import {useState, useEffect} from 'react';
import {
    Container,
    Footer,
    Content,
    Form,
    Item,
    Input,
    Text,
    Button,
    Grid,
    Col,
    Row
} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {Keyboard} from 'react-native';
import {findWithCharactersAction} from "../../redux/actions/searchActions";
import {useButtonTimeOut} from "../../hooks/TimeOutButtonHook";
import {ErrorComponent} from "../Errors/ErrorComponent";
import {ResultListComponent} from "../ResultListComponent/ResultLIstComponent";

export const SearchCountries = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const range = useSelector(state => state.charecterSearchReducer.range);
    const error = useSelector(state => state.charecterSearchReducer.error);

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
    }, [setShowFooter, hideOnKeyBoardFooter, showOnKeyBoardFooter, Keyboard]);


    const hideOnKeyBoardFooter = () => {
        setShowFooter(false);
    }

    const showOnKeyBoardFooter = () => {
        setShowFooter(true)
    }

    const onSubmit = () => {
        if (!isEnabled) {return;}
        timeOutCallBack();
        dispatch(findWithCharactersAction(searchTerm));
    }

    const renderRange = () => {
        if (!range) {
            return
        }
        if (range.length === 0 && error === "") {
            return (<ResultListComponent range={[]} headerText="Results: "/>)
        }
        else {
            return (<ResultListComponent range={range} headerText="Results: "/>)
        }
    }

    const renderError = () => {
        if (error && error !== '') {
            return (
                <ErrorComponent error={error}/>)
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
                            marginBottom: 20,
                            marginLeft: 5,
                            marginRight: 20,
                            marginTop: 20
                        }}>
                            <Col>
                                <Form>
                                    <Item style={{marginBottom: 10}}>
                                        <Input
                                            maxLength={2}
                                            placeholder="Search"
                                            value={searchTerm}
                                            onChangeText={(text) => {setSearchTerm(text)}}/>
                                    </Item>

                                </Form>
                            </Col>
                        </Row>
                        <Row style={{alignItems: 'center', flexDirection: 'column', flex: 2}}>
                            <Col>
                                <Button disabled={!isEnabled} onPress={onSubmit}>
                                    <Text>Search</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Grid>
            </Content>
            <Footer style={showFooter ? {height: 300, backgroundColor: "white"} : {height: 0}}>
                {renderRange()}
            </Footer>
        </Container>
    )
}