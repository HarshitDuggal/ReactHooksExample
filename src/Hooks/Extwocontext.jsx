import React,{useContext} from 'react'
import { AppContext } from './UseContextHook'
const Extwocontext = () => {
    const {userName} = useContext(AppContext);
  return (
    <div>{userName}</div>
  )
}

export default Extwocontext