import React, { useContext} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import {ThemeContext} from './contexts/ThemeProvider';
import {LanguageContext} from './contexts/LanguageProvider';
function Navbar(props){
    const {isDarkMode, toggleTheme} = useContext(ThemeContext);
    const { classes } = props;
    const {language} = useContext(LanguageContext);
    const flags = {
      english:{
        flag: "🇬🇧",
        greeting: "Welcome"
      },
      french:{
        flag: "🇫🇷",
        greeting: "Bienvenue"
      },
      spanish:{
        flag: "🇪🇸",
        greeting: "Bienvenidos"
      },
      arabic:{
        flag: "🇸🇦",
        greeting: "مرحبا"
      }
    }
    /**
     we can use this syntax or calling a function that wrap Navbar and use context consume 
    **/
    // return (
    //   <LanguageContext.Consumer>
    //     {value =>(
    //       <div className={classes.root}>
    //       <AppBar position='static' color={isDarkMode ? "default" : "primary"}>
    //         <Toolbar>
    //           <IconButton className={classes.menuButton} color='inherit'>
    //             <span>{flags[value.language].flag}</span>
    //           </IconButton>
    //           <Typography className={classes.title} variant='h6' color='inherit'>
    //             {flags[value.language].greeting}
    //           </Typography>
    //           <Switch onChange={toggleTheme}/>
    //           <div className={classes.grow} />
    //           <div className={classes.search}>
    //             <div className={classes.searchIcon}>
    //               <SearchIcon />
    //             </div>
    //             <InputBase
    //               placeholder='Search...'
    //               classes={{
    //                 root: classes.inputRoot,
    //                 input: classes.inputInput
    //               }}
    //             />
    //           </div>
    //         </Toolbar>
    //       </AppBar>
    //     </div>
    //     )}
    //   </LanguageContext.Consumer>
    // );
    return (
            <div className={classes.root}>
              <AppBar position='static' color={isDarkMode ? "default" : "primary"}>
                <Toolbar>
                  <IconButton className={classes.menuButton} color='inherit'>
                    <span>{flags[language].flag}</span>
                  </IconButton>
                  <Typography className={classes.title} variant='h6' color='inherit'>
                    {flags[language].greeting}
                  </Typography>
                  <Switch onChange={toggleTheme}/>
                  <div className={classes.grow} />
                  <div className={classes.search}>
                    <div className={classes.searchIcon}>
                      <SearchIcon />
                    </div>
                    <InputBase
                      placeholder='Search...'
                      classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput
                      }}
                    />
                  </div>
                </Toolbar>
              </AppBar>
            </div>
          )
  }
export default withStyles(styles)(Navbar);
