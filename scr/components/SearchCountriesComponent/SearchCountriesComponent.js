import React from 'react';
import {useState, useEffect} from 'react';
import {Container, Footer, Content, Form, Item, Input, H1, H2, H3, Text , Button, Card, CardItem, Grid, Col, Row} from 'native-base';
import { useDispatch, useSelector } from 'react-redux';
import { FlatList, View, SafeAreaView, Keyboard, L } from 'react-native';
import { findWithCharactersAction } from "../../redux/actions/searchActions";
import { resetWithCharactersAction } from "../../redux/actions/resetActions";
import { useButtonTimeOut } from "../../hooks/TimeOutButtonHook";
import { useKeyboarFooter } from "../../hooks/KeyBoardFooterHook";

export const SearchCountries=()=>{
    const [searchTerm, setsearchTerm] = useState("");

    const range = useSelector(state => state.charecterSearchReducer.range);
    const error = useSelector(state => state.charecterSearchReducer.error);

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
        if(!isEnabled){return;}
        timeOutCallBack();
        dispatch(findWithCharactersAction(searchTerm));
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
                    Search
                    </H1>
                    </Row>
                    {renderError()}
                    <Row style={{alignItems: 'center',flexDirection: 'row', margin:20}}>
                        <Col>
                        <Form>
                        <Item rounded style={{marginBottom:10}}>
                         <Input
                          maxLength={2}
                           placeholder="Search"
                            value={searchTerm}
                             onChangeText={(text)=>{setsearchTerm(text)}}/>
                         </Item>
                         
                        </Form>
                        </Col>
                    </Row>
                    <Row style={{alignItems: 'center',flexDirection: 'column', flex:2}}>
                        <Col>
                        <Button disabled={!isEnabled} onPress={onSubmit}>
                        <Text>Search</Text>
                      </Button>
                        </Col>
                    </Row>
                    </Col>
                </Grid>
            </Content>
            <Footer  style={showFooter? {height: 300} : {height: 30}}>
            {renderRange()}
            </Footer>  
        </Container>
    )
}