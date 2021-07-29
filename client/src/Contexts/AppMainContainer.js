import React,{ createContext, useState, useEffect } from "react";

import AppMain from "../Components/AppMain";

export const MainContext = createContext({});


export default function AppMainContainer(){

  const [isLoggedIn, setIsLoggedIn] = useState(false); 
    const [isLoginError, setIsLoginError] = useState(false);
  return (

    <MainContext.Provider value={{
      isLoggedIn, setIsLoggedIn, 
      isLoginError, setIsLoginError
    }}>
      <AppMain/>
    </MainContext.Provider>
  )
}


