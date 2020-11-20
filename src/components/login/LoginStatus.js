import React, { useEffect, useState } from "react";

export default function LoginStatus() {
	const [user, setUser] = useState();
	useEffect(() => {
		const loggedInUser = localStorage.getItem("user");
		if (loggedInUser) {
			const foundUser = JSON.parse(loggedInUser);
			setUser(foundUser);
			console.log("get from local storage: ", user);
		}
	}, []);
}
//당장 필요한 코드는 아니나 추후에 로그인 상태 확인 위해 필요!!
