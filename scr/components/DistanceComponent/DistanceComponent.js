import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Header, Content, Form, Item, Input, H1, H2, H3, Text, Card , Button, Toast, Grid, Col, Row} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { findDistanceAction } from "../../redux/actions/searchActions";
import { resetDistanceAction } from "../../redux/actions/resetActions";
import { useButtonTimeOut } from "../../hooks/TimeOutButtonHook";

export const Distance = ()=>{
    const [firstCountry, setfirstCountry] = useState("");
    const [secondCountry, setSecondCountry] = useState("");
    const [isEnabled, timeOutCallBack] = useButtonTimeOut(true, true);

    const distance  = useSelector(state => state.distanceReducer.distance);
    const error = useSelector(state => state.distanceReducer.error);

    const dispatch = useDispatch();

    useEffect(() => {
      return () => {
        dispatch(resetDistanceAction());
        setfirstCountry("");
        setSecondCountry("");
      }
    }, [dispatch])

    const onSubmit = ()=>{
        if(!isEnabled){ return }
        timeOutCallBack();
        dispatch(findDistanceAction(firstCountry,secondCountry));
    }

    const renderError = () =>{
      if(error && error!==''){
        return (
        <Row style={{alignItems: 'center',flexDirection: 'column',backgroundColor: 'red'}}>
        <Col><H2>{error}</H2></Col>
        </Row>)
      }
    }

    return(
        <Container>
            <Content>
              <Grid>
              <Col style={{justifyContent:'center', flexDirection: 'column'}}>
              <Row style={{alignItems: 'center',flexDirection: 'column',backgroundColor: 'powderblue'}}>
              <H1>
                Distance 
              </H1>
              </Row>
              {renderError()}
              <Row Row style={{alignItems: 'center',flexDirection: 'column', margin:10, flex:4}}>
                <Card style={{minWidth:150, minHeight:35}}>
                {!distance || <H1 style={{textAlign:"center"}}>{distance + "KM"}</H1>}                  
                </Card>
              </Row>
              <Row style={{alignItems: 'center',flexDirection: 'row', margin:20}}>
                <Col>
                <Form>
            <Item rounded style={{marginBottom:10}}>
              <Input autoCapitalize='characters' maxLength={3} placeholder="First Country" value={firstCountry} onChangeText={(text)=>{setfirstCountry(text)}}/>
            </Item>
            <Item rounded>
              <Input autoCapitalize='characters' maxLength={3} placeholder="Second Country" value={secondCountry} onChangeText={(text)=>{setSecondCountry(text)}}/>
            </Item>
            </Form>
                </Col>
              </Row>
              <Row style={{alignItems: 'center',flexDirection: 'column', marginTop:20, flex:2}}>
              <Col>
              <Button disabled={!isEnabled} onPress={onSubmit}>
                <Text>Get Distance</Text>
            </Button>
              </Col>
              </Row>
              </Col>
              </Grid>
            </Content>
        </Container>
    )
}