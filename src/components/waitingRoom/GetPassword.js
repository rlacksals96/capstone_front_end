import React, { useState } from 'react'
import {useLocation,Link} from 'react-router-dom';
import url from '../url'
export default function GetPassword(props){


  const [password,setPassword]=useState('');
  const loc=useLocation();
  const handleChange = (e) => {
    const { value } = e.target;
    setPassword(value);
  };


  const handleClick=()=>{

    const pw={
      name:loc.state.roomName,
      passcode:password
    }
    console.log(pw);
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "");
    myHeaders.append("Content-Type", "application/json");
    let raw = JSON.stringify(pw);
    let requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };
    let status='';
    fetch(url()+"/room/join", requestOptions)
      .then(response => {
        //response.json()
        status=response.status;
      })
      .then(data => {
        if(status===200){
          window.open("https://www.google.com");
        }
        else{
          alert("비밀번호가 틀렸습니다")
        }
        // console.log("data ",data);
      })
      .catch(error => console.log('error', error));
  }
  return(
    <div>
      <div>비밀번호 입력</div>
      <input type="text" value={password} name="password" onChange={handleChange} />
      <button onClick={handleClick}>확인</button>
      <Link to='/rooms'><button>취소</button></Link>
      {/*<p>{loc.state.pw}</p>*/}
    </div>
  )
}