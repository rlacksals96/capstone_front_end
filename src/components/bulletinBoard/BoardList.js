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
		axios
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
			});
	}, []);

	const columns = [
		{ dataField: "id", text: "번호" },
		{ dataField: "userId", text: "작성자" },
		{ dataField: "title", text: "제목" },
	];
	/* var id;
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
								<th>{board.id}</th>
								<Link to={'./board/'+board.id}>
									<th>{board.title}</th>
								</Link>
								<th>writer</th>
								<th>20.11.22</th>
								<th>1</th>
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
