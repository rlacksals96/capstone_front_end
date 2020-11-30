
import React, { useState } from "react";
import Header from "../components/layout/Header";
import SignUpForm from "../components/signUp/SignUpForm";
import url from '../components/url';
import axios from "axios";
// axios.defaults.baseURL = 'https://172.20.10.3:5000';
// axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
// axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
function SignUp() {
	const [inputs, setInputs] = useState({
		userId: "",
		userPw: "",
		userPwRe: "",
		email: "",
	});
	const { userId, userPw, userPwRe, email } = inputs;

	const onChange = (e) => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};
	const submitHandler = (e) => {
		e.preventDefault();
		const user={
			email:email,
			password:userPw
		}

		// console.log(url()); //넘어가는 값 확인용. 추후 삭제

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
		fetch(url()+"/account/signup", requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error));
	 };
	return (
		<div>
			<Header />
			<form onSubmit={submitHandler}>
				<SignUpForm

					userPw={userPw}
					userPwRe={userPwRe}
					email={email}
					onChange={onChange}
				/>
				<button type="submit">Sign Up</button>
			</form>
		</div>
	);
}
export default SignUp;

