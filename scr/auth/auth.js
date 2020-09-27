import AsyncStorage from '@react-native-community/async-storage';

export async function attemptLoggIn(userName,password){


    let attempsString = await AsyncStorage.getItem('loggins');
    if(attempsString===null){
        await AsyncStorage.setItem('loggins', '1');
        return checkCredentials(userName,password);
    }
    
    let attemps = parseInt(attempsString);

    console.log(attemps);

    if(!attemps || attemps>=3){
        AsyncStorage.setItem('loggins', '1');
        return false;
    }

    attemps++;
    AsyncStorage.setItem('loggins', attemps.toString());
    return checkCredentials(userName,password);

}

const checkCredentials =(userName,password) =>{
    return (userName==="admin" && password === "123")
}