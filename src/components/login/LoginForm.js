import React from 'react';

const LoginForm=({email, password, onChange})=>{
    return(
        <div>
            <input type="email" name="email" value={email} onChange={onChange} placeholder="email"/><br/>
            <input type="password" name="password" value={password} onChange={onChange} placeholder="User password"/>



        </div>
    )
}
export default LoginForm;