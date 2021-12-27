import React from 'react';
import { useState , useEffect } from 'react';

const FunctionalCounter = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect( () => {
        document.title = `clicked ${count} times`;
        console.log("document title updating");
    }, [count]);
    return ( 
        <div>
            <input type="text" onChange={(e) => setName( e.target.value)}/>
            <button onClick={() => setCount( count + 1) }>
                count : {count}
            </button>
        </div>
    );
}
export default FunctionalCounter; 