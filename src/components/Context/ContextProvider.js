//1. usecontext & useState:
import React, { useState ,useContext} from 'react';

// export const CounterContext = React.createContext();  //state
// export const CounterContextDispatcher = React.createContext();  //setSate()
const CounterContext = React.createContext();  //state
const CounterContextDispatcher = React.createContext();  //setSate()

const CounterProvider = ({children }) => {
    const [count, setCount] = useState(0);
    return (
        <CounterContext.Provider value={count}>
            <CounterContextDispatcher.Provider value={setCount}>
               {children }
            </CounterContextDispatcher.Provider>
        </CounterContext.Provider>
    );
} 
export default CounterProvider;
//custom hook:
export const useCount = () => useContext(CounterContext);
export const useCountActions = () => {
    const setCount = useContext(CounterContextDispatcher);
    const addOne = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const addFive = () => {
        setCount((prevCount) => prevCount + 5);
    };

    const decrement = () => {
        setCount((prevCount) => prevCount - 1);
    };
    // return all actions inside object:
    return {addFive, addOne, decrement};
};