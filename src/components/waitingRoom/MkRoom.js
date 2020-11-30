import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import Header from '../layout/Header'
import url from '../url';
export default function MkRoom({useHistory}) {
	const [isInvitation,setIsInvitation]=useState(true)
	// useEffect(()=>{
	//
	// },[isInvitation]);
	const [inputs,setInputs]=useState({
		roomName:'',
		password:'',

	});
	const {roomName,password}=inputs;

	const handleChange=()=> {
		setIsInvitation(!isInvitation);
		// if (isInvitation === false) {
		//
		// }
		console.log(isInvitation);
	}


	const handleConfirmClick=()=>{

		const info={
			name:roomName,
			passcode:password,
			is_private:(!isInvitation).toString(),
		}
		// //이유는 모르겠는데 isInvitation 상태의 반대로 해야 올바른 값이 전달됨.
		// console.log(info);
		let myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");
		let raw = JSON.stringify(info);
		let requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};
		fetch(url()+"/room", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
		// let myHeaders = new Headers();
		// myHeaders.append("Authorization", "");
		// myHeaders.append("Content-Type", "application/json");
		// let raw = JSON.stringify(info);
		// let requestOptions = {
		// 	method: 'POST',
		// 	headers: myHeaders,
		// 	body: raw,
		// 	redirect: 'follow'
		// };
		// fetch("https://192.168.0.4:8080/room", requestOptions)
		// 	.then(response => response.json())
		// 	.then(res => {//여기 안에 토큰도 들어가 있
		// 		console.log("response: ",res);
		// 		//추후 링크에서 리스폰 받아오면 거기에 맞게 연결 해주기
		// 		if(res.response===200){
		// 			console.log("i got a response from server");
		// 		}
		// 	})
		// 	.catch(error => console.log('error', error));


		window.open("http://www.google.com");
		// history.push('/rooms');
	}
	const handleInput = (e) => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};

	return(
		<div>
			{/*<Header/>*/}
			<br/>
			<div>방제목</div>
			<input type="text" name="roomName" onChange={handleInput} value={roomName} placeholder="insert title"/><br/>
			<label>초대방:</label>&nbsp;&nbsp;
			<input type="checkBox" id="invitation" value={isInvitation} onChange={handleChange}/><br/>
			<div>비밀번호</div>
			<input type="text" name="password" onChange={handleInput} value={password} placeholder="insert password" disabled={isInvitation}/><br/>
			<Link to='/rooms'><button onClick={handleConfirmClick}>확인</button></Link>
			<Link to='/rooms'><button>취소</button></Link>
		</div>
	)
}
//room_name not null, passcode,
//초대방이면 passcode 활성화되고, 공개방이면 passcode 비활성화
//TODO: jsx로 컴포넌트 구성하
//TODO: fetch post 구성하기
//확인 누르면 바로 방생성, 취소 누르면 다시 방으로 라우