import React, { useState } from "react";
import Header from "../components/layout/Header";
import SignUpForm from "../components/signUp/SignUpForm";
import axios from "axios";
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
		const test = {
			userId: { userId },
			title: { userPw },
		};
		const user = {
			userId: { userId },
			userPw: { userPw },
			email: { email },
		};
		const url = "https://jsonplaceholder.typicode.com/posts";
		console.log(test); //넘어가는 값 확인용. 추후 삭제
		axios
			.post(url, test)
			.then((response) => console.log(response))
			.catch((error) => console.lor("error: ", error));
	};
	return (
		<div>
			<Header />
			<form onSubmit={submitHandler}>
				<SignUpForm
					userId={userId}
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
