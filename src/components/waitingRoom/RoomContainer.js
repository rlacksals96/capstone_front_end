import React from "react";
import basicImg from "../../images/study_with_me.jpg";
import "../../styles/RoomContainer.css";
// import "./RoomContainer.css";
import { useHistory } from "react-router-dom";

export default function RoomContainer({ renderList }) {
	const his = useHistory();
	const handleClick = (title) => {
		// his.push("./rooms/1/room"); //추후 useParams써서 수정할것.

		//console.log("title ", title); //title 가져온것 확인
		const token = localStorage.getItem("token");
		const tok = JSON.parse(token);
		const userId = tok.token.userId;
		const pw = tok.token.title;
		console.log("userid, pw: ", userId, pw); //서버랑 맞추면 pw부분 반드시 변경해야함!!!!당연히 title이 아닌 password이런식이어야함.
		console.log("방이름: ", title);
		window.open("http://www.google.com");
		// window.open("localhost:5000");
	};

	return (
		<ul>
			{renderList.map((room, idx) => (
				<li
					className="roomContainer"
					key={idx}
					value={room.title}
					onClick={() => handleClick(room.title)}
					style={{ cursor: "pointer" }}
				>
					<img className="basicImg" src={basicImg} alt="no image" />
					<div className="roomTitle">{room.title}</div>
				</li>
			))}
		</ul>
	);
}
