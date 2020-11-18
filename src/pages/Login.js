import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from "../components/layout/Header";
import LoginForm from "../components/login/LoginForm";
function Login(){
    const [inputs,setInputs]=useState({
        userId:'',
        userPw:''
    });
    const {userId,userPw}=inputs;
    const onChange=(e)=>{
        const {name,value}=e.target;
        setInputs({...inputs,[name]:value});
    }
    const onCreate=()=>{
        const user={
            userId,
            userPw
        };
        //this is for check
        console.log(userId,userPw);

    }
    return (
        <div>
            <Header/>
            <h3 id="title">Login</h3>
            <LoginForm userId={userId} userPw={userPw} onChange={onChange}/>
            <button onClick={onCreate}>Login</button>

            <p>지워져야 할 것이나 현재는 확인 수단이 없어서 밑에꺼 누르면 바로 방으로 이동</p>
            <Link to="/rooms">로그인</Link>









        </div>


    )
}
export default Login;