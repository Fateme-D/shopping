import { useState } from "react";

const HoockCounter = () => {
    const [count, setCount] = useState(0);

    const addOneHandler = () => {
        setCount( (prevCount) => prevCount + 1);
    };

    const addFiveHandler = () => {
        for( let i = 0; i < 5; i++ ) {
            setCount((prevCount) => prevCount + 1);
        }
    };   
    return ( 
        <div>
            <h2>count - {count} </h2>
            <button onClick={addOneHandler}> Add one </button>
            <button onClick={addFiveHandler}> Add Five </button>
        </div>
    );
}
 
export default HoockCounter; 