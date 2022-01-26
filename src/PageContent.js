import React , {Component} from 'react';
import { ThemeContext } from './contexts/ThemeProvider';
export default class PageContent extends Component{
    static contextType = ThemeContext;
    render(){
        const {isDarkMode} = this.context;
        const style = {
            backgroundColor: isDarkMode? "gray": "white",
            height: "100vh",
            width: "100vw"
        };
        return (<div style={style}>
            {this.props.children}
        </div>);
    }
}