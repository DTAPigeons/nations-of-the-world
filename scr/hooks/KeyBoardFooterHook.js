import {useState, useEffect} from 'react';
import {  Keyboard } from 'react-native';

export function useKeyboarFooter(){
    const [showFooter, setshowFooter] = useState(true);

    useEffect(() => {
        Keyboard.addListener("keyboardWillShow", ()=>{setshowFooter(false)});
        Keyboard.addListener("keyboardWillHide", ()=>{setshowFooter(true)});
        return () => {
            Keyboard.removeListener("keyboardWillShow", ()=>{
                LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);setshowFooter(false)});
            Keyboard.removeListener("keyboardWillHide", ()=>{setshowFooter(true)});
        };
    }, [setshowFooter]);

    return showFooter;

}