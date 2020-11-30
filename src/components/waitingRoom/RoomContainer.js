import React, { useState } from 'react'
import basicImg from "../../images/study_with_me.jpg";
import "../../styles/RoomContainer.css";
import url from '../url'


export default function RoomContainer({ renderList,history }) {


	const handleClick = (roomName,isPrivate) => {
		//pass-> isPrivate로 연결됨..초대방 여부 확인인데, 서버쪽 네이밍 문제로 공개방 여부를 pass로 받음.

		if(!isPrivate){//공개방인 경우
			const roomInfo={
				name:roomName,
				passcode:"NULL"
			}
			let myHeaders = new Headers();
			myHeaders.append("Content-Type", "application/json");
			let raw = JSON.stringify(roomInfo);
			let requestOptions = {
				method: 'POST',
				headers: myHeaders,
				body: raw,
				redirect: 'follow'
			};
			let status=''//상태코드 저장위해서 사용
			fetch(url()+"/room/join", requestOptions)
				.then(response => {
					status=response.status;
					//response.json()
				})
				.then(result => {
					console.log("resonse: "+status);
					if(status){
						window.open("http://www.google.com");
					}
					else{
						console.log("입장실패");
					}

				})
				.catch(error => console.log('error', error));
		}
		else{//초대방인 경우
			console.log("초대방")
			history.push({
				pathname:"/rooms/getPassword",
				state:{roomName:roomName}
			});


		}



	};

	return (
		<div>

			<ul>
				{renderList.map((room, idx) => (
					<li
						className="roomContainer"
						key={idx}
						value={room.name}
						onClick={() => handleClick(room.name,room.pass)}
						style={{ cursor: "pointer" }}
					>
						<img className="basicImg" src={basicImg} alt="no image" />
						<div className="roomTitle">{room.name}</div>
						<div className="roomTitle">{room.pass.toString()}</div>
						{/*위 아래 꺼 초대방/공개방 여부 확인하는건 지울 예정 */}

					</li>
				))}
			</ul>
		</div>

	);
}
