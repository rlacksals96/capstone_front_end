import React from "react";
import basicImg from "../../images/study_with_me.jpg";
import "../../styles/RoomContainer.css";



export default function RoomContainer({ renderList }) {

	const handleClick = (title) => {
		const token = localStorage.getItem("user");
		const tok = JSON.parse(token);

		window.open("http://www.google.com");
		// window.open("https://localhost:3001?sessionId=eifjfjf&passcode=whatpassword&userId=myid");
	};

	return (
		<ul>
			{renderList.map((room, idx) => (
				<li
					className="roomContainer"
					key={idx}
					value={room.name}
					onClick={() => handleClick(room.name)}
					style={{ cursor: "pointer" }}
				>
					<img className="basicImg" src={basicImg} alt="no image" />
					<div className="roomTitle">{room.name}</div>
					<div className="roomTitle">{room.pass.toString()}</div>
					{console.log(room.pass)}
				</li>
			))}
		</ul>
	);
}
