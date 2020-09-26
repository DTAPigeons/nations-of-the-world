import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Header, Content, Form, Item, Input, H1, H2, H3, Text , Button, Card, CardItem, List, ListItem, Grid, Col, Row, Footer} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, SafeAreaView, Keyboard } from 'react-native';
import {  findTimeZoneRangeAction } from "../../redux/actions/searchActions";
import { resetTimeZoneRangeAction } from "../../redux/actions/resetActions";
import { useButtonTimeOut } from "../../hooks/TimeOutButtonHook";

export const TimeZoneRange=()=>{
    const [from, setfrom] = useState("");
    const [to, setto] = useState("");

    const range = useSelector(state => state.timeZoneRangeReducer.range);
    const error = useSelector(state => state.timeZoneRangeReducer.error);

    const [isEnabled, timeOutCallBack] = useButtonTimeOut(true, true);

    const [showFooter, setshowFooter] = useState(true);

    const dispatch = useDispatch();

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow", hideOnKeyBoardFooter);
        Keyboard.addListener("keyboardDidHide", showOnKeyBoardFooter);
        return () => {
            Keyboard.removeAllListeners("keyboardDidShow");
            Keyboard.removeAllListeners("keyboardDidHide");
        };
    }, [setshowFooter, hideOnKeyBoardFooter, showOnKeyBoardFooter]);


    const hideOnKeyBoardFooter=()=>{
        setshowFooter(false);
    }

    const showOnKeyBoardFooter=()=>{
        setshowFooter(true)
    }

    const onSubmit = ()=>{
        if(!isEnabled) {return}
        timeOutCallBack();
        dispatch(findTimeZoneRangeAction(from,to));
    }

    const renderRange = ()=>{
        if(!range || range.length===0){
            return
        }
        else{
            const renderItem = ({item})=>
                (<Card><Text>{item}</Text></Card>)
            ;
            return(
                <SafeAreaView>
                <FlatList
                data = {range}
                renderItem= {renderItem}
                keyExtractor = {item=>item}
                />
                </SafeAreaView>

            )
        }
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
                    Time Zone Range
                    </H1>
                    </Row>
                    {renderError()}
                    <Row style={{alignItems: 'center',flexDirection: 'row', margin:20}}>
                        <Col>
                        <Form>
                        <Item rounded style={{marginBottom:10}}>
                        <Input autoCapitalize='characters' maxLength={9} placeholder="From" value={from} onChangeText={(text)=>{setfrom(text)}}/>
                        </Item>
                        <Item rounded>
                        <Input autoCapitalize='characters' maxLength={9} placeholder="To" value={to} onChangeText={(text)=>{setto(text)}}/>
                        </Item>
                        
                        </Form>
                        </Col>
                    </Row>
                    <Row style={{alignItems: 'center',flexDirection: 'column', flex:2}}>
                        <Col>
                        <Button disabled={!isEnabled} onPress={onSubmit}>
                        <Text>Get Time Zone Range</Text>
                        </Button>
                        </Col>
                    </Row>
                    </Col>
                </Grid>
            </Content>
            <Footer style={showFooter?{height: 270}:{height: 0}}>
            {renderRange()}
            </Footer>            
        </Container>
    )
}