import React, { useState } from "react";

export default function RoomSearchBox({
	roomList,
	manageRoomContainer,
	resetContainer,
}) {
	const [searchTitle, setSearchTitle] = useState("");
	const handleSearch = (e) => {
		setSearchTitle(e.target.value);
	};
	const handleBtn = () => {
		const result = roomList.filter((data) => data.title === searchTitle);
		manageRoomContainer(result); //필터링 된 결과값이 null이면 전체리스트, 있으면 해당 결과를 랜더링..
	};
	return (
		<div>
			<input
				style={{ padding: "10px" }}
				type="text"
				placeholder="방 제목 검색"
				onChange={handleSearch}
				name="title"
				value={searchTitle}
			/>
			&nbsp;
			<button style={{ padding: "8px" }} onClick={handleBtn}>
				검색
			</button>
			&nbsp;
			<button style={{ padding: "8px" }} onClick={resetContainer}>
				초기화
			</button>
		</div>
	);
}
