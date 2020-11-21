import React from "react";
import basicImg from "../../images/study_with_me.jpg";

import "./RoomContainer.css";
export default function RoomContainer({ renderList }) {
	return (
		<ul>
			{renderList.map((room, idx) => (
				<li key={idx}>
					<img className="basicImg" src={basicImg} alt="no image" />
					<div className="roomTitle">{room.title}</div>
				</li>
			))}
		</ul>
	);
}
