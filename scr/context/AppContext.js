import * as React from 'react';

export const contex = ()=>({
    extractor: {},
    setData: async ()=>{
      axios.get('https://restcountries.eu/rest/v2/all').then(res=>{
        this.extractor = new InformationExtractor(res.data);
        console.log(this.extractor.getWithLetters("AFG"));
      })
    }
  })

export const AppContext = React.createContext({});