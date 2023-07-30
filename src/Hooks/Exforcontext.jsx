import React,{useContext} from 'react'
import { AppContext } from './UseContextHook'
const Exforcontext = () => {
    const {setUserName} = useContext(AppContext);
  return (
    <div>
        <input onChange={(e) => {
            setUserName(e.target.value);
        }}
        />
    </div>
  )
}

export default Exforcontext