import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Card, Form, Item, Input, H1, H2, Content, Text , Button, Grid, Row, Col} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { findNearestNonNeighbourAction } from "../../redux/actions/searchActions";
import { resetNearestNonNeighbourAction } from "../../redux/actions/resetActions";
import { useButtonTimeOut } from "../../hooks/TimeOutButtonHook";

export const ClosesestNonNeighbour=()=>{
    const [country, setcountry] = useState("");

    const closestCountry = useSelector(state=>state.nearestReducer.nearest);
    const error = useSelector(state => state.nearestReducer.error);

    const [isEnabled, timeOutCallBack] = useButtonTimeOut(true, true);


    const dispatch = useDispatch();

    useEffect(() => {
        return () => {
            dispatch(resetNearestNonNeighbourAction());
            setcountry("");
        }
    }, [dispatch])

    const onSubmit = ()=>{
        if(!isEnabled){ return }
        timeOutCallBack();
        dispatch(findNearestNonNeighbourAction(country));
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
            Closesest Neighbour
            </H1>
            </Row>
            {renderError()}
            <Row Row style={{alignItems: 'center',flexDirection: 'column', margin:10, flex:4}}>
            <Card style={{minWidth:200, minHeight:35}}>
                {!closestCountry || <H1 style={{textAlign:"center"}}>{closestCountry.name}</H1>}
            </Card>
            </Row>
            <Row style={{alignItems: 'center',flexDirection: 'row', margin:20}}>
                <Col>
                <Form>
            <Item rounded>
              <Input autoCapitalize='characters' maxLength={3} placeholder="Country" value={country} onChangeText={(text)=>{setcountry(text)}}/>
            </Item>

          </Form>
            </Col>
            </Row>
            <Row style={{alignItems: 'center',flexDirection: 'column', marginTop:20, flex:2}}>
                <Col>
                <Button disabled={!isEnabled} onPress={onSubmit}>
                <Text>Get Closesest Non Neighbour</Text>
            </Button>
                </Col>
            </Row>
            </Col>
            </Grid>
            </Content>        
           
        </Container>
    )
}