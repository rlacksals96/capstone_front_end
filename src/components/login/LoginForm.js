import React from 'react';

const LoginForm=({userId, userPw, onChange})=>{
    return(
        <div>
            <input type="text" name="userId" value={userId} onChange={onChange} placeholder="User id"/><br/>
            <input type="password" name="userPw" value={userPw} onChange={onChange} placeholder="User password"/>



        </div>
    )
}
export default LoginForm;