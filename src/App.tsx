import React, { Component } from "react";
import Login from './components/Login';


import * as firebase from 'firebase';
import  app from 'firebase/app';

// These imports load individual services into the firebase namespace.
import auth from 'firebase/auth';



import { Route, Switch, Router } from "react-router";
import Fallback from "./fallback/Fallback";
import routesDef from "./routes/Routes";
import history from "./misc/History";




const App: React.FC = () => {

  const config = {
    // apiKey: "ENTER YOURS HERE",
    // authDomain: "ENTER YOURS HERE",
    // databaseURL: "ENTER YOURS HERE",
    // projectId: "ENTER YOURS HERE",
    // storageBucket: "ENTER YOURS HERE",
    // messagingSenderId: "ENTER YOURS HERE"

    apiKey: "AIzaSyBLoFR9ozdfPd3XQsQiHqRSm6CeQn1zZN0",
    authDomain: "test-project-fceb9.firebaseapp.com",
    databaseURL: "https://test-project-fceb9.firebaseio.com",
    projectId: "test-project-fceb9",
    storageBucket: "test-project-fceb9.appspot.com",
    messagingSenderId: "1039528157635",
    appId: "1:1039528157635:web:64630ec3501398eb915d76"
  }
  firebase.initializeApp(config);

  console.log('route: ','ss');

  return (
      <Router history={history}>
        <>
          <Switch>
            {routesDef.map(route => {
                  return (



                      <Route
                                    exact={route.exact}
                                    key={route.path}
                                    path={route.path}
                                    render={(props: {}) => {
                                        const ComposeComponent: any = route.component;
                                        return (
                                            <ComposeComponent {...props} />
                                        )
                                    }}
                                />






                  )

              {/*<Route path="/">*/}
              {/*  <Login />*/}
              {/*</Route>*/}
                }
            )}
            <Route component={Fallback} />
          </Switch>
        </>
      </Router>
  );
}

export default App;



