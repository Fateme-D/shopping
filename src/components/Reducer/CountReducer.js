//4 : multiple useReducer
import { useReducer } from 'react';
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

const CountReducer = () => {
    const [count, dispatch] = useReducer(reducer, initialState);
    const [countTwo, dispatchTwo] = useReducer(reducer, initialState);
    return (
        <div>
            <h2> count One is: {count} </h2>
            <div>
                <button onClick={() => dispatch( { type: "add", value: 1 } )}> add one</button>
                <button onClick={() => dispatch( { type: "add", value: 5 } )}> add five</button>
                <button onClick={() => dispatch( { type: "decrement", value: 1 } )}> decrement</button>
                <button onClick={() => dispatch( { type: "reset"} )}> Reset</button>  
            </div>
            <h2> count Two is: {countTwo} </h2>
            <div>
                <button onClick={() => dispatchTwo( { type: "add", value: 1 } )}> add one2</button>
                <button onClick={() => dispatchTwo( { type: "decrement" , value: 1 } )}> decrement2</button>
                <button onClick={() => dispatchTwo( { type: "reset"} )}> Reset</button>  
            </div>
           
        </div>
    );
}
export default CountReducer;













//3: multiple state & multiple action: {}
// import { useReducer } from 'react';
// const initialState = {
//     firstCounter: 0,
//     secondCounter: 0,
// }
// const reducer = (state, action) => {
//     console.log(state, action);
//     switch (action.type) {
//         case "add":
//             return {...state, firstCounter: state.firstCounter + action.value };
//         case "decrement":
//             return {...state, firstCounter: state.firstCounter - action.value };
//         case "add2":
//             return {...state, secondCounter: state.secondCounter + action.value };
//         case "decrement2":
//             return {...state, secondCounter: state.secondCounter - action.value };
//         case "reset":
//             return initialState;
//         default:
//             return state;
//     }
// }

// const CountReducer = () => {
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div>
//             <h2> count One is: {count.firstCounter} </h2>
//             <h2> count Two is: {count.secondCounter} </h2>
//             <button onClick={() => dispatch( { type: "add", value: 1 } )}> add one</button>
//             <button onClick={() => dispatch( { type: "add", value: 5 } )}> add five</button>
//             <button onClick={() => dispatch( { type: "decrement", value: 1 } )}> decrement</button>
//             <button onClick={() => dispatch( { type: "add2", value: 1 } )}> add one2</button>
//             <button onClick={() => dispatch( { type: "decrement2" , value: 1 } )}> decrement2</button>
//             <button onClick={() => dispatch( { type: "reset"} )}> Reset</button>
            
//         </div>
//     );
// }
// export default CountReducer;


 






//2 :multiple state
// import { useReducer } from 'react';
// const initialState = {
//     firstCounter: 0,
//     secondCounter: 0,
// }
// const reducer = (state, action) => {
//     console.log(state, action);
//     switch (action.type) {
//         case "addOne":
//             return {...state, firstCounter: state.firstCounter + 1};
//         case "decrement":
//             return {...state, firstCounter: state.firstCounter - 1};
//         case "addOne2":
//             return {...state, secondCounter: state.secondCounter + 1};
//         case "decrement2":
//             return {...state, secondCounter: state.secondCounter - 1};
//         case "reset":
//             return initialState;
//         default:
//             return state;
//     }
// }

// const CountReducer = () => {
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div>
//             <h2> count One is: {count.firstCounter} </h2>
//             <h2> count Two is: {count.secondCounter} </h2>
//             <button onClick={() => dispatch( { type: "addOne"} )}> add one</button>
//             <button onClick={() => dispatch( { type: "decrement"} )}> decrement</button>
//             <button onClick={() => dispatch( { type: "addOne2"} )}> add one2</button>
//             <button onClick={() => dispatch( { type: "decrement2"} )}> decrement2</button>
//             <button onClick={() => dispatch( { type: "reset"} )}> Reset</button>
            
//         </div>
//     );
// }
// export default CountReducer;












//1 : simple useReducer
// import { useReducer } from 'react';
// const initialState = 0;
// const reducer = (state, action) => {
//     switch (action) {
//         case "addOne":
//             return state + 1;
//         case "addFive":
//             return state + 5;
//         case "decrement":
//             return state - 1;
//         case "reset":
//             return initialState;
//         default:
//             return state;
//     }
// }
// const CountReducer = () => {
//     const [count, dispatch] = useReducer(reducer, initialState);
//     return (
//         <div>
//             <h2> count One is: {count.firstCounter} </h2>
//             <h2> count Two is: {count.secondCounter} </h2>
//             <button onClick={() => dispatch( "addOne")}> add One</button>
//             <button onClick={() => dispatch( "decrement" )}> decrement</button>
//             <button onClick={() => dispatch( "addFive")}> add Five</button>
//             <button onClick={() => dispatch( { type: "reset"} )}> Reset</button>
            
//         </div>
//     );
// }
// export default CountReducer;

 