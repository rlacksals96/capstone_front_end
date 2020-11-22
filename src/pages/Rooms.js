import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import RoomSearchBox from "../components/waitingRoom/RoomSearchBox";
import MkRoom from "../components/waitingRoom/MkRoom";
import RoomContainer from "../components/waitingRoom/RoomContainer";

function Rooms() {
	const [roomList, setRoomList] = useState([]); //서버에서 가져온 값 저장.
	const [renderList, setRenderList] = useState([]); //실제 렌더링 될 객체를 저장하고 있다.

	useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts`)
			.then((res) => {
				if (res.status === 200) {
					console.log(res);
					setRoomList(res.data);
					setRenderList(res.data);
				} else {
					console.log("wrong status");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const manageRoomContainer = (result) => {
		if (result.length === 0) {
			setRenderList(roomList);
			//no result
		} else {
			setRenderList(result);
			//have result
		}
	};
	const resetContainer = () => {
		setRenderList(roomList);
	};

	return (
		<div>
			<Header />

			<RoomSearchBox
				roomList={roomList}
				manageRoomContainer={manageRoomContainer}
				resetContainer={resetContainer}
			/>
			
			<MkRoom />
			<Link to="./rooms/1"><button>방입장</button></Link>
			{/* renderlist로 관리하려 헀으나 초기화가 확실히 안되서 일단은 roomList를 인자로 넣었음.. css처리해주고 경우의 수에 맞는 랜더링 할수 있게 고민.. */}
			<RoomContainer renderList={renderList} />
		</div>
	);
}

export default Rooms;

{
	/* <Link to="./rooms/1"><button>방입장</button></Link>
           대기방->방 으로 이동하는거 확인용 버튼..의미 없음 */
}
