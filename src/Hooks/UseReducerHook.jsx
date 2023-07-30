import { useReducer } from "react";

const reducer = (state,action) => {
    switch(action.type){
        case "INCREMENT":
            return {count:state.count+1,showText:state.showText};
        case "DECREMENT":
            return {count:state.count-1,showText:state.showText};
        case "SHOWTEXT":
            return {count:state.count,showText:!state.showText};
        default:
            return state;
        }
}

const useReducerHook = () => {
    const [state, dispatch] = useReducer(reducer, {count:0,showText:true})
    const plusFunction = () => {
        dispatch({type:"INCREMENT"});
        dispatch({type:"SHOWTEXT"});
    }
    const minusFunction = () => {
        dispatch({type:"DECREMENT"});
        dispatch({type:"SHOWTEXT"});
    }
    return (
    <>
      <div className="h-screen flex items-center justify-center bg-black">
        <h1 className="text-white">Counter Example using useReducer</h1>
        {/* {console.log(state.showText)} */}
        {state.showText && <h2 className="text-white m-4">{state.count}</h2>}
        <div className="p-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-8"
            onClick={plusFunction}
          >
            +
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={minusFunction}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default useReducerHook;
