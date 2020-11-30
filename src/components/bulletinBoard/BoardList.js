import React, { useState, useEffect } from "react";

import {Link, Route} from 'react-router-dom';
import "../../styles/BulletinBoard.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Table,Button,Spinner} from "react-bootstrap";
import Header from "../layout/Header";
import BoardRead from '../../pages/BoardRead';
import url from '../url';

const BoardList = () => {
	const [boards, setBoards] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
			let myHeaders = new Headers();
			myHeaders.append("Authorization", "");
			myHeaders.append("Content-Type", "application/json");
	
			let requestOptions = {
				method: 'GET',
				headers: myHeaders,
				redirect: 'follow'
				};
			fetch(url()+"/board?name=jawoo")
				.then(res => res.json())
				.then(
					(result) => {
					setLoading(true);
					setBoards(result.data);
					// console.log("result:"+boards);

				})
				.catch(error => console.log('error', error));
				

	}, []);



	return (
		<div>
			<Header />
			<div className="container">
				<Link to="./board/create">
					<Button className="writeButton">글쓰기</Button>
				</Link>
				{loading ? (
					<Table striped bordered hover size="sm">
						<thead>
							<tr>
								<th>번호</th>
								<th>제목</th>
								<th>작성자</th>
								<th>작성일</th>
							</tr>
						</thead>
						<tbody>
						{boards.map((data) => (

							<tr key={data.id}>
								<td>{data.id}</td>
								<td >
									<Link to={'./board/'+data.id} className="board-link">{data.title}</Link>
								</td>
								<td>{data.email}</td>
								<td>{data.date}</td>
							</tr>
						))}
						</tbody>
					</Table>
					// <p>hi</p>
				) : (
					<Spinner animation="border" />
				)}
			</div>
			<Route path="/rooms/:roomId/board/:id" exact={true} component={BoardRead}/>
		</div>
	);
};

export default BoardList;
