import React, { useState, useEffect, useContext} from 'react';
import {
    Switch,
    Route,
} from "react-router-dom";

import NavBar from './Common/NavBar';
import Home from './Home/Home';
// import Login from './Login/Login';
import SignUpContainer from './SignUp/Context/SignUpContainer';

import {MainContext} from '../Contexts/AppMainContainer';


export default function AppMain() {

const { parentID, setParentID } = useContext(MainContext)
    return (
        // <MainContext.Provider value={{isLoggedIn, setIsLoggedIn, isLoginError, setIsLoginError}}>
            <>
            <NavBar />
            <Switch>
                <Route exact path="/">
                    <Home/>
                        {/* <SignUpContainer/> */}
                </Route>
                {/* <Route path="/login">
                    <Login/>
                </Route> */}
                <Route path="/signup">
                    <SignUpContainer parentID={parentID} setParentID={setParentID} />
                </Route>
            </Switch>
            </>
       // {/* </MainContext.Provider> */}
    )
}
