import React, { createContext, useState } from 'react'
import Exforcontext from './Exforcontext';
import Extwocontext from './Extwocontext';

export const AppContext = createContext(null);

const UseContextHook = () => {
  const [userName, setUserName] = useState("");
    return (
    <AppContext.Provider value={{userName,setUserName}}>
        <Exforcontext/>
        <Extwocontext/>
    </AppContext.Provider>
  )
}

export default UseContextHook;