import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Header, Content, Form, Item, Input, H1, H2, H3, Text, Card , Button, Toast, Grid, Col, Row} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { findDistanceAction } from "../../redux/actions/searchActions";
import { resetDistanceAction } from "../../redux/actions/resetActions";
import { useButtonTimeOut } from "../../hooks/TimeOutButtonHook";
import { ErrorComponent } from "../Errors/ErrorComponent";

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
        <ErrorComponent error={error}/>)
      }
    }

    return(
        <Container>
            <Content>
              <Grid>
              <Col style={{justifyContent:'center', flexDirection: 'column'}}>
              {renderError()}
              <Row Row style={{alignItems: 'center',flexDirection: 'column', margin:10, flex:4}}>
                <Card style={{minWidth:150, minHeight:35}}>
                {!distance || <H1 style={{textAlign:"center"}}>{distance + "KM"}</H1>}                  
                </Card>
              </Row>
              <Row style={{alignItems: 'center',flexDirection: 'row',  marginBottom:20, marginLeft:5, marginRight:20, marginTop:20}}>
                <Col>
                <Form>
            <Item style={{marginBottom:20}}>
              <Input autoCapitalize='characters' maxLength={3} placeholder="First Country" value={firstCountry} onChangeText={(text)=>{setfirstCountry(text)}}/>
            </Item>
            <Item >
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