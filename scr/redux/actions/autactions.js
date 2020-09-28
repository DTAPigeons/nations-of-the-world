import InformationExtractor from "../../queries/InformationExtractor";
import {attemptLogIn} from "../../auth/auth";
import axios from 'axios';

export function logInAction(userName, password) {
    return async dispatch => {
        const loginSuccess = await attemptLogIn(userName, password);
        if (!loginSuccess) {
            dispatch({
                type: "LOGG_IN_ACTION",
                payload: {
                    isLogedin: false,
                    error: "Log in failed",
                    extractor: undefined
                }
            });
        }
        else {
            axios.get('https://restcountries.eu/rest/v2/all').then(res => {
                const extractor = new InformationExtractor(res.data);
                dispatch({
                    type: "LOGG_IN_ACTION",
                    payload: {
                        isLogedin: true,
                        error: "",
                        extractor: extractor
                    }
                });
            })
                .catch((error) => {console.log(error)})
        }

    }
}

export function logOutAction() {
    return {
        type: "LOGG_OUT_ACTION",
        payload: {
            isLogedin: false,
            error: false,
            extractor: undefined
        }
    }
}