import React,{useState} from 'react';
import Header from "../components/layout/Header";
import SignUpForm from "../components/signUp/SignUpForm";
function SignUp(){
    const [inputs,setInputs]=useState({
        userId:'',
        userPw:'',
        userPwRe:'',
        email:''
    });
    const {userId,userPw,userPwRe,email}=inputs;

    const onChange=(e)=>{
        const {name,value}=e.target;
        setInputs({...inputs,[name]:value});
    }
    const onCreate=()=>{
        const user={
            userId,
            userPw,
            userPwRe,
            email
        }
        //this is for check
        console.log(userId,userPw,userPwRe,email)
    }
    return(
        <div>
            <Header/>
            <SignUpForm userId={userId}
                        userPw={userPw}
                        userPwRe={userPwRe}
                        email={email}
                        onChange={onChange}
            />
            <button onClick={onCreate}>Sign Up</button>
        </div>
    )
}
export default SignUp;