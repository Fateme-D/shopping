// import { useContext } from "react";
// import { CounterContext, CounterContextDispatcher } from './ContextProvider';
import { useCount, useCountActions } from './ContextProvider';

const CounterOne = () => {
    // const count = useContext(CounterContext);  //state
    // const setCount = useContext(CounterContextDispatcher); //setState
    const count = useCount();
    const { addFive, addOne, decrement} = useCountActions(); 

    // const addOne = () => {
    //     setCount((prevCount) => prevCount +1);
    // };

    // const addFive = () => {
    //     setCount((prevCount) => prevCount +5);
    // };

    return (
        <div>
            <h2> count is: {count} </h2>
            <button onClick={addOne}>add one</button>
            <button onClick={addFive}>add five</button>
            <button onClick={decrement}>decrement</button>
        </div>
    );
}
export default CounterOne;
