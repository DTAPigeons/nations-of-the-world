import InformationExtractor from "../../queries/InformationExtractor";
import axios from 'axios';

export function logInAction(){
    return dispatch => {
        axios.get('https://restcountries.eu/rest/v2/all').then(res=>{
            const extractor = new InformationExtractor(res.data);
            console.log(extractor.getWithLetters("AF"));
            dispatch({
                type: "LOGG_IN_ACTION",
                payload:{
                    isLogedin: true,
                    extractor: extractor
                }
            });
          })
          .catch((error)=>
          {console.log(error)})
    }
}