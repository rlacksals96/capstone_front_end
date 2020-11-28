
import React from "react";

import IdDupChk from "./IdDupChk";

const SignUpForm = ({ userPw, userPwRe, email, onChange }) => {
	const renderPwDuplicateMsg = () => {
		if (userPw === "") return "";
		else {
			return userPw === userPwRe ? (
				<span style={{ color: "green", fontWeight: "bold" }}>일치합니다</span>
			) : (
				<span style={{ color: "red", fontWeight: "bold" }}>
					일치하지 않습니다
				</span>
			);
		}
	};
	return (
		<div>
			{/*<div>*/}
			{/*	<p>사용할 아이디를 입력하세요</p>*/}
			{/*	<input*/}
			{/*		type="text"*/}
			{/*		name="userId"*/}
			{/*		value={userId}*/}
			{/*		onChange={onChange}*/}
			{/*		placeholder="user id"*/}
			{/*	/>*/}
			{/*	<span>&nbsp;</span>*/}

			{/*	<IdDupChk userId={userId} />*/}
			{/*</div>*/}
			<div>
				<p>이메일을 입력해주세요</p>
				<input
					type="email"
					name="email"
					value={email}
					onChange={onChange}
					placeholder="email"
				/>
			</div>
			<div>
				<p>사용할 비밀번호를 입력하세요</p>
				<input
					type="password"
					name="userPw"
					value={userPw}
					onChange={onChange}
					placeholder="password"
				/>
			</div>
			<div>
				<p>비밀번호를 다시 입력해주세요</p>
				<input
					type="password"
					name="userPwRe"
					value={userPwRe}
					onChange={onChange}
					placeholder="password again..."
				/>
				{/*<span>&nbsp;{renderPwDuplicateMsg()}</span>*/}
			</div>

			<br />
		</div>
	);
};

export default SignUpForm;

