//2. useReducer & useContext:
import React, { useContext, useReducer} from 'react';

const CounterContext = React.createContext();  //state
const CounterContextDispatcher = React.createContext();  //setSate()

const initialState = 0;
const reducer = (state, action) => {
    console.log(state, action);
    switch (action.type) {
        case "add":
            return state + action.value;
        case "decrement":
            return state - action.value;
        case "reset":
            return initialState;
        default:
            return state;
    }
}

const CounterProvider = ({children }) => {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <CounterContext.Provider value={count}>
            <CounterContextDispatcher.Provider value={dispatch}>
               {children }
            </CounterContextDispatcher.Provider>
        </CounterContext.Provider>
    );
} 
export default CounterProvider;
//custom hook:
export const useCount = () => useContext(CounterContext);
export const useCountActions = () => useContext(CounterContextDispatcher);