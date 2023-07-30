import {useLayoutEffect,useEffect,useRef} from 'react'

const UseLayoutEffect = () => {
    useLayoutEffect(() => {
      console.log(inputRef.current.value);
    }, [])
    useEffect(() => {
    inputRef.current.value = "Is it"
    }, [])
    const inputRef = useRef();
  return (
    <div>
        <h1>UseLayoutEffect</h1>
        <input value="Harshit" ref={inputRef}/>
    </div>
  )
}

export default UseLayoutEffect