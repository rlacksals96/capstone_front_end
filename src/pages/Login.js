import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import LoginForm from "../components/login/LoginForm";
import LoginStatus from "../components/login/LoginStatus";
import axios from "axios";
function Login(props) {
	const [inputs, setInputs] = useState({
		userId: "",
		userPw: "",
	});
	const { userId, userPw } = inputs;
	const { loginStatus, setLoginStatus } = useState("");
	const onChange = (e) => {
		const { name, value } = e.target;
		setInputs({ ...inputs, [name]: value });
	};
	const history = useHistory();
	const handleSubmit = async (e) => {
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
		await axios
			.post(url, test)
			.then((response) => {
				console.log("response: ", response);
				if (response.status === 201) {
					localStorage.setItem(
						"token",
						JSON.stringify({
							login: true,
							token: response.data,
							//token:response.data.token
						})
					);
					console.log("response.data: ", response.data);
					history.push("/rooms");
				}
			})
			.catch((error) => {
				console.log("registration error", error);
			});
		//local storage확인용 ..추후 삭제
		const myName = localStorage.getItem("user");
		console.log("myname: ", JSON.parse(myName));
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
			{/* <div>{loginStatus}</div> */}
		</div>
	);
}
export default Login;
