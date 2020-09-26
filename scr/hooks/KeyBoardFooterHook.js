import {useState, useEffect} from 'react';
import {  Keyboard } from 'react-native';

export function useKeyboarFooter(){
    const [showFooter, setshowFooter] = useState(true);

    useEffect(() => {
        Keyboard.addListener("keyboardDidShow",hideOnKeyBoardFooter);
        Keyboard.addListener("keyboardDidHide", showOnKeyBoardFooter);
        return () => {
            Keyboard.addListener("keyboardDidShow");
            Keyboard.addListener("keyboardDidHide");
        };
    }, [setshowFooter, hideOnKeyBoardFooter, showOnKeyBoardFooter]);

    const hideOnKeyBoardFooter=()=>{
        setshowFooter(false);
    }

    const showOnKeyBoardFooter=()=>{
        setshowFooter(true)
    }

    return showFooter;

}