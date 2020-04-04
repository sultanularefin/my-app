import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CardHeader from '@material-ui/core/CardHeader';
//
// import { createBrowserHistory } from 'history';
//
// const history = createBrowserHistory();

import history from "./../misc/History";
import SuccessFile from "./SuccessFile";

import * as firebase from 'firebase';
import app from 'firebase/app';

// These imports load individual services into the firebase namespace.
import auth from 'firebase/auth';
import {sign} from "crypto";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import SignUp from "./SignUp";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      container: {
        display: 'flex',
        flexWrap: 'wrap',
        width: 400,
        margin: `${theme.spacing(0)} auto`
      },
      loginBtn: {
        marginTop: theme.spacing(2),
        flexGrow: 1
      },
      header: {
        textAlign: 'center',
        background: '#212121',
        color: '#fff'
      },
      card: {
        marginTop: theme.spacing(10)
      }

    }),
);

const Login = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    if (username.trim() && password.trim()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [username, password]);


  const validate_Email_func=(email:string)=> {
    console.log('email at validation email : ',email);

    {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        return (true)
      }
      // Alert.alert('You have entered an invalid email address!')
      return false;

    }
  }
  const validate_Password_func=(password:string)=>{

    if( !password || !typeof(password) || password === '' || password.length <6 ){
      return false;
    }

    return true;
  }

  const validate_Password_match_func= (password:string,confPassword:string)=>{

    if ((password  === confPassword) && (validate_Password_func(password)))

    {
      return true;
    }

    else {
      return false;
    }
  }




  const NavigateToLogin = () => {


    return(

        <Route path="/signup">
          <SignUp />

        </Route>


    )
  }


  const handleSignIn = () => {


    let validate_Email =    false;
    let validate_password = false;
    let validate_conf_password = false;

    validate_Email = validate_Email_func(username) === false? false:true;
    validate_password = validate_Password_func(password) === false? false:true;


    if (validate_Email === false) {

      console.log(
          'Sorry, email format is incorrect.');


      return;
    }


    else if (validate_password ===  false) {

      // setLoadingState(false);
      console.log(
          'Password format is incorrect or Weak Password'     );
      return;
    }


    else {
      //default else
      console.log('validate_Email: ', validate_Email);
      console.log('validate_password: ', validate_password);

      if ((!validate_Email)   && (!validate_password)) {

        console.log(
            'Validation error.'
        );
        return;

      }


      else {

        let UserCredential =  firebase.auth().createUserWithEmailAndPassword(username, password).
        catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;

          console.log('firebase error');
          // ...
        }).then(result=>{
          firebase.auth().signInWithEmailAndPassword(username, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          }).then(signupSucess=>{

            console.log('sign up success with firebase ');

            console.log('signupSucess: ',signupSucess);
            history.push("/user");
            // return <SuccessFile/>
          });
        });




        // let UserCredential = auth().createUserWithEmailAndPassword(emailState, passwordState);




      }
    }
  }


  // validate email and password.



  const handleKeyPress = (e:any) => {
    if (e.keyCode === 13 || e.which === 13) {
      isButtonDisabled || handleSignIn();
    }
  };

  return (
      <React.Fragment>
        <form className={classes.container} noValidate autoComplete="off">
          <Card className={classes.card}>
            <CardHeader className={classes.header} title="Login App" />
            <CardContent>
              <div>
                <TextField
                    error={error}
                    fullWidth
                    id="username"
                    type="email"
                    label="Username"
                    placeholder="Username"
                    margin="normal"
                    onChange={(e)=>setUsername(e.target.value)}
                    onKeyPress={(e)=>handleKeyPress(e)}
                />
                <TextField
                    error={error}
                    fullWidth
                    id="password"
                    type="password"
                    label="Password"
                    placeholder="Password"
                    margin="normal"
                    helperText={helperText}
                    onChange={(e)=>setPassword(e.target.value)}
                    onKeyPress={(e)=>handleKeyPress(e)}
                />
              </div>
            </CardContent>
            <CardActions>
              <Button
                  variant="contained"
                  size="large"
                  color="secondary"
                  className={classes.loginBtn}
                  onClick={()=>handleSignIn()}
                  disabled={isButtonDisabled}>
                Sign In
              </Button>
            </CardActions>

            <CardActions>
              <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classes.loginBtn}
                  onClick={() => history.push("/signup") }
                  disabled={isButtonDisabled}>
                Already Have an Account
              </Button>
            </CardActions>


          </Card>

          {/*<Router>*/}
          {/*  <div>*/}
          {/*    <nav>*/}
          {/*      <ul>*/}
          {/*        <li>*/}
          {/*          <Link to="/signup">signup</Link>*/}
          {/*        </li>*/}

          {/*        <li>*/}
          {/*          <Link to="/user">Users</Link>*/}
          {/*        </li>*/}
          {/*      </ul>*/}
          {/*    </nav>*/}



          {/*  </div>*/}
          {/*</Router>*/}
        </form>
      </React.Fragment>
  );
}

export default Login;
