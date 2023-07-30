import React , {useRef} from 'react'
import UseImperativeChild from './UseImperativeChild'
const UseInperativeHandleHook = () => {
  const buttonRef = useRef(null);
    return (
    <div>
        <button onClick={() => {buttonRef.current.alterToggle()}}>Button From Parent</button>
        {/* <UseImperativeChild ref={buttonRef}/> */}
        <UseImperativeChild ref={buttonRef}/>
        
    </div>
  )
}

export default UseInperativeHandleHook;