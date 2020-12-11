import React, { useEffect, useState } from "react";
import Header from "../components/layout/Header";
import { Link } from "react-router-dom";
import axios from "axios";
import RoomSearchBox from "../components/waitingRoom/RoomSearchBox";
import RoomContainer from "../components/waitingRoom/RoomContainer";
import '../styles/Rooms.css';
import url from '../components/url';

import {Button, Spinner} from "react-bootstrap";


function Rooms({history}) {
	const [roomList, setRoomList] = useState([]); //서버에서 가져온 값 저장.
	const [renderList, setRenderList] = useState([]); //실제 렌더링 될 객체를 저장하고 있다.
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		// const config={
		// 	headers:{
		// 		Authorization:'Bearer '+localStorage.getItem('token')
		// 	}
		// }

			// fetch(url()+'/rooms')
			// .then((res) => {
			// 		const response=res.json();
			// 	// if (res.status === 200) {
			// 		console.log(response);
			// 		// setRoomList(res.data);
			// 		// setRenderList(res.data);
			// 		// setLoading(true);
			// 	// } else {
			// 	// 	console.log("wrong status");
			// 	// }
			// })
			// .catch((err) => {
			// 	console.log(err);
			// });
		fetch(url()+'/rooms')
			.then(res => res.json())
			.then(
				(result) => {
					setLoading(true);
					setRoomList(result.data)//전체 리스트 저장하고 있음
					setRenderList(result.data)//검색 결과에 따라 랜더링 
				})
			.catch(error => console.log('error', error));
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
			<Header content={null}/>
			<RoomSearchBox
				roomList={roomList}
				manageRoomContainer={manageRoomContainer}
				resetContainer={resetContainer}
			/>


			{/* <Link to="./rooms/1">
				<button>방입장</button>
			</Link> */}

			{loading ? (
				<RoomContainer history={history} renderList={renderList} />
			) : (
				<Spinner animation="border" />
			)}
		</div>
	);
}

export default Rooms;

{
	/* <Link to="./rooms/1"><button>방입장</button></Link>
           대기방->방 으로 이동하는거 확인용 버튼..의미 없음 */
}
