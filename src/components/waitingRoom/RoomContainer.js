import React from "react";
import basicImg from "../../images/study_with_me.jpg";
import "../../styles/RoomContainer.css";
// import "./RoomContainer.css";
export default function RoomContainer({ renderList }) {
	return (
		<ul>
			{renderList.map((room, idx) => (
				<li className="roomContainer" key={idx}>
					<img className="basicImg" src={basicImg} alt="no image" />
					<div className="roomTitle">{room.title}</div>
				</li>
			))}
		</ul>
	);
}
