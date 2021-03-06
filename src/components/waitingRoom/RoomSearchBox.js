import React, { useState } from "react";
import {Button} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {TextField, Container} from '@material-ui/core';

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
		const result = roomList.filter((data) => data.name === searchTitle);
		manageRoomContainer(result); //필터링 된 결과값이 null이면 전체리스트, 있으면 해당 결과를 랜더링..
	};

	return (
		<Container >
			<TextField
				variant="outlined"
				style={{ padding: "10px" }}
				type="text"
				placeholder="방 제목 검색"
				onChange={handleSearch}
				name="title"
				value={searchTitle}
			/>
			&nbsp;
			<Button style={{ padding: "8px", marginTop: "15px" }} onClick={handleBtn}>
				검색
			</Button>
			&nbsp;
			<Button style={{ padding: "8px", marginTop: "15px" }} onClick={resetContainer}>
				초기화

			</Button>
			&nbsp;
			<Link to="./rooms/mkroom">
				<Button style={{ padding: "8px", marginTop: "15px" }}>
					방만들기
				</Button>
			</Link>

			<Link to="./rooms/board">
					<Button className="boardButton" style={{ marginRight: '220px', float: 'right', marginTop: "15px" }}>게시판</Button>
			</Link>
			{/*<button onClick={resetContainer}>새로고침</button>*/}

		</Container>
	);
}
