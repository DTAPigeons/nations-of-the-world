import AsyncStorage from '@react-native-community/async-storage';

export async function attemptLoggIn(){
    let attempsString = await AsyncStorage.getItem('loggins');
    if(attempsString===null){
        await AsyncStorage.setItem('loggins', '1');
        return true;
    }
    
    let attemps = parseInt(attempsString);

    console.log(attemps);

    if(!attemps || attemps>=3){
        await AsyncStorage.setItem('loggins', '1');
        return false;
    }

    attemps++;
    await AsyncStorage.setItem('loggins', attemps.toString());
    return true;
}