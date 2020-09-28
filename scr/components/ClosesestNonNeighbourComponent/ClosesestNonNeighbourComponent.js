import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Card, Form, Item, Input, H1, H2, Content, Text, Button, Grid, Row, Col} from 'native-base';
import {useDispatch, useSelector} from 'react-redux';
import {findNearestNonNeighbourAction} from "../../redux/actions/searchActions";
import {resetNearestNonNeighbourAction} from "../../redux/actions/resetActions";
import {useButtonTimeOut} from "../../hooks/TimeOutButtonHook";
import {ErrorComponent} from "../Errors/ErrorComponent";

export const ClosesestNonNeighbour = () => {
    const [country, setcountry] = useState("");

    const closestCountry = useSelector(state => state.nearestReducer.nearest);
    const error = useSelector(state => state.nearestReducer.error);

    const [isEnabled, timeOutCallBack] = useButtonTimeOut(true, true);


    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(resetNearestNonNeighbourAction());
            setcountry("");
        }
    }, [dispatch])

    const onSubmit = () => {
        if (!isEnabled) { return }
        timeOutCallBack();
        dispatch(findNearestNonNeighbourAction(country));
    }

    const renderError = () => {
        if (error && error !== '') {
            return (<ErrorComponent error={error}></ErrorComponent>)
        }
    }

    return (
        <Container>
            <Content>
                <Grid>
                    <Col style={{justifyContent: 'center', flexDirection: 'column'}}>
                        {renderError()}
                        <Row Row style={{alignItems: 'center', flexDirection: 'column', margin: 10, flex: 4}}>
                            <Card style={{minWidth: 200, minHeight: 35}}>
                                {!closestCountry || <H1 style={{textAlign: "center"}}>{closestCountry.name}</H1>}
                            </Card>
                        </Row>
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
                                    <Item>
                                        <Input autoCapitalize='characters' maxLength={3} placeholder="Country"
                                               value={country} onChangeText={(text) => {setcountry(text)}}/>
                                    </Item>

                                </Form>
                            </Col>
                        </Row>
                        <Row style={{alignItems: 'center', flexDirection: 'column', marginTop: 20, flex: 2}}>
                            <Col>
                                <Button disabled={!isEnabled} onPress={onSubmit}>
                                    <Text>Get Closest Non-Neighbour</Text>
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Grid>
            </Content>

        </Container>
    )
}