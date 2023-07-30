import { useState } from "react";
const useStaeHook = () => {
    const [counter, setCounter] = useState(0);
    const [text, setText] = useState('');
    const plusFunction = () => {
        setCounter(counter+ 1);
    }
    const minusFunction = () => {
        setCounter(counter - 1);
    }
    return(
        <div className="h-screen flex items-center justify-center bg-black">
            <h1 className="text-white">Counter Example using useState</h1>
            <h2 className="text-white m-4">{counter}</h2>
            <div className="p-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-8" onClick={plusFunction}>+</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={minusFunction}>-</button>
            </div>
            <div>
                <input  placeholder="Enter anything" onChange={(e) => {setText(e.target.value)}}/>
                <h2 className="text-white">{text}</h2>
            </div>
        </div>
    )
}

export default useStaeHook;
