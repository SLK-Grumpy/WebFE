import React from 'react';

const LoginPresentation = (props) => {
    return (
        <div>
            <form className="input-form">
                <div className="form-group">
                    <label htmlFor="user_name">User Name: </label>
                    <input name="user_name" className="form-control" type="text" id="user_name" onChange={props.onChange}></input>
                </div>
                
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input name="password" className="form-control" type="password" id="password" onChange={props.onChange}></input>
                </div>
                
                <button className="btn btn-primary" onClick={props.submit}>Submit</button>
            </form>
        </div>
    )
};

export default LoginPresentation