import { useState } from "react";

const HookObjectUP = () => {
    const [userData , setUserData] = useState( { firstName:"" , lastName:"" });

    const changeHandler = (e) => {
        setUserData( {...userData , firstName: e.target.value});
    };
    const changeHandler = (e) => {
        setUserData( {...userData , lastName: e.target.value});
    };
    return (
        <form>
            <input type="text" value={userData.firstName} onChange={changeHandler} />
            <input type="text" value={userData.lastName } onChange={lastNameHandler} />
            <h2> my name is - {userData.firstName } </h2>
            <h2> my last name is - {userData.lastName} </h2>
            <div> {JSON.stringify(userData)} </div>
        </form>
    );
};
 
export default HookObjectUP;