import React, { useState, useEffect } from "react";
import axios from "axios";

export default function IdDupChk({ userId }) {
	const [post, setPost] = useState({});
	const [isDup, setIsDup] = useState(true);
	const [notice, setNotice] = useState("");
	//사실 post써서 응답으로 받은 값에 따라서 되는지 안되는지로 판단해야 하나 현재로써는 서버에 해당 장치가 없기 때문에
	//이렇게 밖에 처리 불가 ~> 추후 post 형태로 변경해서 응답 받아오기
	useEffect(() => {
		const url = `https://jsonplaceholder.typicode.com/posts/${userId}`;
		axios
			.get(url)
			.then((res) => {
				setPost(res.data);
				console.log(res);
			})
			.catch((err) => {
				// console.log(err);
				console.log("ignore");
			});
	}, [userId]);

	const handleClick = () => {
		if (post.id == userId) {
			//두 값간에 type이 다르기 때문에 ===는 사용 불가.. ==은 내용만 봐서 확인 가능..
			alert("동일한 id가 존재합니다");
			setIsDup(true);
		} else {
			alert("사용 가능합니다");
			setIsDup(false);
		}
	};

	return (
		<>
			<button type="button" onClick={handleClick}>
				중복확인
			</button>
		</>
	);
}
