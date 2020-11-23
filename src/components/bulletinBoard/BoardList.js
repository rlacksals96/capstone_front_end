import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import "../../styles/BulletinBoard.css";

import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import * as ReactBootStrap from "react-bootstrap";
import Header from "../layout/Header";

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
		{ dataField: "userId", text: "userId" },
		{ dataField: "title", text: "title" },
	];

	return (
		<div>
			<Header />
            <Link to="./board/create">
                <ReactBootStrap.Button className="writeButton">글쓰기</ReactBootStrap.Button>
            </Link>
			<div className="container">
				{loading ? (
					<BootstrapTable
						keyField="id"
						data={boards}
						columns={columns}
						pagination={paginationFactory()}
					/>
				) : (
					<ReactBootStrap.Spinner animation="border" />
				)}
			</div>
		</div>
	);
};

export default BoardList;
