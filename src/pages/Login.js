import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import LoginForm from "../components/login/LoginForm";
import axios from "axios";
function Login(props) {
	const [inputs, setInputs] = useState({
		userId: "",
		userPw: "",
	});

	const { userId, userPw } = inputs;
	const onChange = (e) => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};

	const handleSubmit = (e) => {
		const test = {
			userId: userId,
			title: userPw,
		};
		const user = {
			userId: userId,
			userPw: userPw,
		};
		const url = "https://jsonplaceholder.typicode.com/posts";

		// 1. url 지정
		// 2. user로 교체하면 됨.

		e.preventDefault();
		console.log(test); //넘어가는값 확인용. 추후 삭제
		axios
			.post(url, test)
			.then((response) => {
				console.log(response);
			})
			.catch((error) => {
				console.log("registration error", error);
			});
	};
	return (
		<div>
			<Header />
			<h3 id="title">Login</h3>
			<form onSubmit={handleSubmit}>
				<LoginForm userId={userId} userPw={userPw} onChange={onChange} />
				<button type="submit">Login</button>
			</form>
			<br />
			<Link to="/rooms">link to room</Link>
		</div>
	);
}
export default Login;
