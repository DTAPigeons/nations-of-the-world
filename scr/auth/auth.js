import AsyncStorage from '@react-native-community/async-storage';

export async function attemptLogIn(userName, password) {

    let attemptsString = await AsyncStorage.getItem('logins');
    if (attemptsString === null) {
        await AsyncStorage.setItem('logins', '1');
        return checkCredentials(userName, password);
    }

    let attempts = parseInt(attemptsString);

    console.log(attempts);

    if (!attempts || attempts >= 3) {
        AsyncStorage.setItem('logins', '1');
        return false;
    }

    attempts++;
    AsyncStorage.setItem('logins', attempts.toString());
    return checkCredentials(userName, password);

}

const checkCredentials = (userName, password) => {
    return (userName === "admin" && password === "123")
}