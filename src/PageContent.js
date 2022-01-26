import React , {useContext, Component} from 'react';
import { ThemeContext } from './contexts/ThemeProvider';
export default function PageContent(props){
        const {isDarkMode} = useContext(ThemeContext);
        const style = {
            backgroundColor: isDarkMode? "gray": "white",
            height: "100vh",
            width: "100vw"
        };
        return (<div style={style}>
            {props.children}
        </div>);
}