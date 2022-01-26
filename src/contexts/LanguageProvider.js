import React, {Component, createContext} from 'react';

export const LanguageContext = createContext();

export class LanguageProvider extends Component{
    constructor(props){
        super(props);
        this.state = {
            language: "english"
        }
    }
    //not a fan of using bind method
    //using jsx syntax for that
    changeLanguage = (evt)=>{
        this.setState({language: evt.target.value});
    }
    render(){
        return(<LanguageContext.Provider value={{changeLanguage: this.changeLanguage, ...this.state}}>
            {this.props.children}
        </LanguageContext.Provider>);
    }
}
export const withLanguageProvider = Component => props =>(
    <LanguageContext.Consumer>
    {value =>
        <Component Languagecontext={value} {...props}/>
    }
    </LanguageContext.Consumer>
    );
