import React, {useState, createContext} from 'react';

export const LanguageContext = createContext();

export function LanguageProvider(props){
    const [language, setLanguage] = useState("english");
    //not a fan of using bind method
    //using jsx syntax for that
    const changeLanguage = (evt)=>{
        setLanguage(evt.target.value);
    }
        return(<LanguageContext.Provider value={{changeLanguage, language}}>
            {props.children}
        </LanguageContext.Provider>);
}
