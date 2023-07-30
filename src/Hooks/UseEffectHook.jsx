import { useState,useEffect } from "react";
const useEffectHook = () => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      console.log(": The hook is called this times");
    }, [count])
    const plusFunction = () => {
        setCount(count+ 1);
    }
    const minusFunction = () => {
        setCount(count - 1);
    }
    return (
        <>
        <div className="h-screen flex items-center justify-center bg-black">
            <h1 className="text-white">Counter Example for useEffect</h1>
            <h2 className="text-white m-4">{count}</h2>
            <div className="p-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-8" onClick={plusFunction}>+</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={minusFunction}>-</button>
            </div>
            </div>
        </>
    );
}

export default useEffectHook;