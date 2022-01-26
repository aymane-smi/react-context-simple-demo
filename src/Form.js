import React, { Component, useContext} from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import withStyles from "@material-ui/core/styles/withStyles";
import styles from "./styles/FormStyles";
import { LanguageContext } from './contexts/LanguageProvider';
function Form(props){
  const {changeLanguage, language} = useContext(LanguageContext);
    const translate = {
      english: {
        signIn: "sign In",
        email: "Email",
        password: "Password",
        rememberMe: "Remember Me"
      },
      french: {
        signIn: "S'identifier ",
        email: "Adresse Électronique",
        password: "Mot De Passe",
        rememberMe: "Souviens De Moi"
      },
      spanish: {
        signIn: "iniciar sesión ",
        email: "correo electrónico",
        password: "contraseña",
        rememberMe: "Recuérdame"
      },
      arabic: {
        signIn: "تسجيل الدخول ",
        email: "البريد الإلكتروني ",
        password: "كلمه السر ",
        rememberMe: "تذكرنى"
      }
    }
    let words = {};
    const { classes } = props;
    if(language === "english")
      words = translate.english;
    if(language === "french")
      words = translate.french;
    if(language === "arabic")
      words = translate.arabic;
    if(language === "spanish")
      words = translate.spanish;
    return (
      <main className={classes.main}>
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography variant='h5'>{words.signIn}</Typography>
          <Select value='english' onChange={changeLanguage}>
            <MenuItem value='english' selected={language==="english"?true:false}>English</MenuItem>
            <MenuItem value='french' selected={language==="french"?true:false}>français</MenuItem>
            <MenuItem value='spanish' selected={language==="spanish"?true:false}>español</MenuItem>
            <MenuItem value='arabic' selected={language==="arabic"?true:false}>العربية</MenuItem>
          </Select>
          <form className={classes.form}>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='email'>{words.email}</InputLabel>
              <Input id='email' name='email' autoFocus />
            </FormControl>
            <FormControl margin='normal' required fullWidth>
              <InputLabel htmlFor='password'>{words.password}</InputLabel>
              <Input id='password' name='password' autoFocus />
            </FormControl>
            <FormControlLabel
              control={<Checkbox color='primary' />}
              label={words.rememberMe}
            />
            <Button
              variant='contained'
              type='submit'
              fullWidth
              color='primary'
              className={classes.submit}
            >
              {words.signIn}
            </Button>
          </form>
        </Paper>
      </main>
    );
  }
export default withStyles(styles)(Form);
