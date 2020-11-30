import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, Route} from 'react-router-dom';
import "../../styles/BulletinBoard.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import {Table,Button,Spinner} from "react-bootstrap";
import Header from "../layout/Header";
import BoardRead from '../../pages/BoardRead';

const BoardList = () => {
	const [boards, setBoards] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		/* axios
			.get(`https://jsonplaceholder.typicode.com/posts`)
			.then((res) => {
				if (res.status === 200) {
					console.log(res);
					setBoards(res.data);
					setLoading(true);
					console.log(boards);
				} else {
					console.log("wrong status");
				}
			})
			.catch((err) => {
				console.log(err);
			}); */


			let myHeaders = new Headers();
			myHeaders.append("Authorization", "");
			myHeaders.append("Content-Type", "application/json");
	
			let requestOptions = {
				method: 'GET',
				headers: myHeaders,
				redirect: 'follow'
				};
			fetch(`https://jsonplaceholder.typicode.com/posts`)
				.then(res => res.json())
				.then(
					(result) => {
					setLoading(true);
					setBoards(result);
				})
				.catch(error => console.log('error', error));
				
		/* let response = fetch(`https://jsonplaceholder.typicode.com/posts`);

		if (response.ok) { 
			let json = response.json();
			console.log(response);
			setBoards(json);
			setLoading(true);
		} else {
			alert("HTTP-Error: " + response.status);
		} */
	}, []);

	/* const columns = [
		{ dataField: "id", text: "번호" },
		{ dataField: "userId", text: "작성자" },
		{ dataField: "title", text: "제목" },
	];
	var id;
	const rowEvents = {
		onClick: (e, row) => {
			console.log(row.id);
			e.
			return(<Link to={'./board/'+row.id}></Link>);
		}
	} */

	return (
		<div>
			<Header />
			<div className="container">
				<Link to="./board/create">
					<Button className="writeButton">글쓰기</Button>
				</Link>
				{loading ? (
					/* <BootstrapTable
						keyField="id"
						data={boards}
						columns={columns}
						pagination={paginationFactory()}
						rowEvents={rowEvents}>
					</BootstrapTable> */
					<Table striped bordered hover size="sm">
						<thead>
							<tr>
								<th>번호</th>
								<th>제목</th>
								<th>작성자</th>
								<th>작성일</th>
								<th>조회수</th>
							</tr>
						</thead>
						<tbody>
						{boards.map((board) => (
							<tr key={board.id}>
								<td>{board.id}</td>
								<Link to={'./board/'+board.id}>
									<td>{board.title}</td>
								</Link>
								<td>writer</td>
								<td>20.11.22</td>
								<td>1</td>
							</tr>
						))}
						</tbody>
					</Table>
				) : (
					<Spinner animation="border" />
				)}
			</div>
			<Route path="/rooms/:roomId/board/:id" exact={true} component={BoardRead}/>
		</div>
	);
};

export default BoardList;
