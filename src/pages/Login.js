import React,{useState,useEffect} from 'react';
import {Link} from 'react-router-dom';
import Header from "../components/layout/Header";
import LoginForm from "../components/login/LoginForm";
import axios from 'axios';
function Login(props){
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
    const handleSubmit=(e)=>{

      axios
        .post(
          "http://localhost:3000/login",
          {
            user:{
              userId,
              userPw
            }
          },
          {withCredentials:true}
        )
        .then(response=>{
          if(response.data.status==="created"){
            props.handleSuccessfulAuth(response.data);
          }
        })
        .catch(error=>{
          console.log("registration error",error);
        });


    }
    return (
        <div>
          <form onSubmit={handleSubmit}>
            <Header/>
            <h3 id="title">Login</h3>
            <LoginForm userId={userId} userPw={userPw} onChange={onChange}/>
            <button type="submit" onClick={onCreate}>Login</button>
            {/*onClick과 관련 함수는 사라져야할 것임..*/}

            <Link to="/rooms">로그인</Link>
          </form>
        </div>


    )
}
export default Login;