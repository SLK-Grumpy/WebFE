import React, {useState} from 'react';
import Login from './loginPresentation';

const LoginContainer = (props) => {
    const [user, setUser] = useState({});


    const changeHandler = (e) => {
        const inputValue = e.target.value;
        const inputField = e.target.name;
        setUser({ ...user, [inputField]: inputValue });
        console.log(user);
    };

    return(
        <div>
             <Login onChange={changeHandler}>

             </Login>
        </div>
    )
}

export default LoginContainer