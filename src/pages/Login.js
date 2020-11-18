import React from 'react';
import {Link} from 'react-router-dom';
import Header from "../components/layout/Header";
function Login(){
    return (
        <div>
            <Header/>
            <div>this is login page</div>
            <Link to="/rooms"><button>로그인</button></Link>
        {/*    로그인 성공시 대기방이므로 링크를 대기방으로 함. 작업 필요*/}
        </div>


    )
}
export default Login;