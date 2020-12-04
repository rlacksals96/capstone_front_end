import React, { useEffect, useState } from "react";
import { Link} from "react-router-dom";
import Header from "../components/layout/Header";
import LoginForm from "../components/login/LoginForm";
import url from "../components/url";
// import {useHistory} from 'react-router-dom';
import LoginStatus from "../components/login/LoginStatus";
import axios from "axios";
function Login({history}) {
	const [inputs, setInputs] = useState({

		email: "",
		password: "",
	});
	const { email, password } = inputs;


	const onChange = (e) => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};


	const handleSubmit = async (e) => {

		const user = {
			email: email,
			password: password,
		};

		e.preventDefault();


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
		let status='';
		fetch(url()+"/account/signin", requestOptions)
			.then(response => {
				status=response.status;
				// console.log(status);
				return response.json()
			})
			.then(data => {//여기 안에 토큰도 들어가 있
				// console.log("token: ",data);
				localStorage.setItem('access-token',data.accessToken);
				if(status===200){
					history.push('/rooms');
				}else{
					alert("이메일 또는 비밀번호가 잘못되었습니다");
				}

			})
			.catch(error => console.log('error', error));



	};

	return (
		<div>
			<Header content={null}/>
			<h3 id="title">Login</h3>
			<form onSubmit={handleSubmit}>

				<LoginForm email={email} password={password} onChange={onChange} />
				<button type="submit" onClick={handleSubmit} >Login</button>
			</form>
			<br />
				
		</div>
	);
}
export default Login;
