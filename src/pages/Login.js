

import React, { useEffect, useState } from "react";

import { Link} from "react-router-dom";
import Header from "../components/layout/Header";
import LoginForm from "../components/login/LoginForm";
// import {useHistory} from 'react-router-dom';
import LoginStatus from "../components/login/LoginStatus";
import axios from "axios";
function Login({history}) {
	const [inputs, setInputs] = useState({

		email: "",
		password: "",
	});
	const { email, password } = inputs;
	const { loginStatus, setLoginStatus } = useState();

	const onChange = (e) => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};


	const handleSubmit = async (e) => {

		const user = {
			email: email,
			password: password,
		};
		//const url = "https://jsonplaceholder.typicode.com/posts";

		e.preventDefault();
		console.log(user); //넘어가는값 확인용. 추후 삭제

		let myHeaders = new Headers();
		myHeaders.append("Authorization", "");
		myHeaders.append("Content-Type", "application/json");
		let raw = JSON.stringify(user);
		let requestOptions = {
			method: 'POST',
			headers: myHeaders,
			body: raw,
			redirect: 'follow'
		};
		fetch("https://172.20.10.3:5000/account/signin", requestOptions)
			.then(response => response.json())
			.then(data => {//여기 안에 토큰도 들어가 있
				console.log("token: ",data);
				localStorage.setItem('access-token',data.accessToken);
			})
			.catch(error => console.log('error', error));


		const tokenInfo = localStorage.getItem("access-token");
		// console.log("tokenInfo: ", JSON.parse(tokenInfo));
		if(tokenInfo){
			history.push('/rooms');
		}
		// if(tokenInfo){
		// 	const hist=useHistory();
		// 	hist.push('/rooms');
		// }
	};
	const handleClick=()=>{
		// const tokenInfo=localStorage.getItem("access-token");
		// if(tokenInfo){
		//
		// 	history.push('/rooms');
		// }
	}
	return (
		<div>
			<Header />
			<h3 id="title">Login</h3>
			<form onSubmit={handleSubmit}>

				<LoginForm email={email} password={password} onChange={onChange} />
				<button type="submit" onClick={handleClick} >Login</button>
			</form>
			<br />
			{/* {() => loginStatus()} */}
			<Link to="/rooms">link to room</Link>

				
		</div>
	);
}
export default Login;
