// basically we can put a reference and use it to manipulate the state value, get the state alue focus on an input and many other things explore.

import {useRef} from 'react'

const UseRefHook = () => {
    const inputRef = useRef(null);
    const change = () => {
        console.log(inputRef.current);
        inputRef.current.value = "";
        inputRef.current.focus();
    }
    return (
    <div>
        <h1>useRefHook</h1>
        <input type="text" placeholder='useRefEx' ref={inputRef}/>
        <button onClick={change}>USe it</button>        
    </div>
  )
}

export default UseRefHook;