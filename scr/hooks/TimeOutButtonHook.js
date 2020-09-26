import { useState} from 'react';

export function useButtonTimeOut(enabled = true, reEnable = true){

    const [isEnabled, setIsEnabled] = useState(enabled);

    const timeOutCallBack = () =>{
        if(isEnabled){
            setIsEnabled(false);        

            console.log("Disabling")

            if(reEnable){
                setReEnable();
            }
        }
    }

    const setReEnable = () =>{
        setTimeout(()=>{
            setIsEnabled(true);
            
        },500)
    }
    
    return [ isEnabled, timeOutCallBack, setReEnable]
}