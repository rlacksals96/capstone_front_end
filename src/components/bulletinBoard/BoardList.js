import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom';
import "../../styles/BulletinBoard.css";
import BoardPagination from './BoardPagination';
import {Table,Button,Spinner} from "react-bootstrap";
import Header from "../layout/Header";
import url from '../url';

const BoardList = () => {
	const [boards, setBoards] = useState([]);
	const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);	//현재페이지
	const [postsPerPage] = useState(10);	//한페이지에서 보여줄 데이터 개수


	useEffect(() => {
			let myHeaders = new Headers();
			myHeaders.append("Authorization", "");
			myHeaders.append("Content-Type", "application/json");
	
			let requestOptions = {
				method: 'GET',
				headers: myHeaders,
				redirect: 'follow'
				};
			fetch(`https://jsonplaceholder.typicode.com/posts`)//url()+"/board?name=jawoo"
				.then(res => res.json())
				.then(
					(result) => {
					setLoading(true);
					setBoards(result);
					//setBoards(result.data);
					// console.log("result:"+boards);

				})
				.catch(error => console.log('error', error));
				

	}, []);

	const indexOfLastPost = currentPage * postsPerPage;	//해당 페이지에서 마지막 게시글의 index번호
	const indexOfFirstPost = indexOfLastPost - postsPerPage;//해당 페이지에서 첫번째 게시글의 index번호
	const currentPosts = boards.slice(indexOfFirstPost, indexOfLastPost);//각 페이지에서 보여질 게시글 배열

	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	
	return (
		<div>
			<Header content={null}/>
			<div className="container mt-5">
				<Link to="/rooms/boardcreate">
					<Button className="writeButton">글쓰기</Button>
				</Link>
				{loading ? (
					<Table  hover>
						<thead>
							<tr>
								<th>번호</th>
								<th>제목</th>
								<th>작성자</th>
								<th>작성일</th>
							</tr>
						</thead>
						<tbody>
						{currentPosts.map((data) => (
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
				) : (
					<Spinner animation="border" />
				)}
				<BoardPagination postsPerPage={postsPerPage} totalPosts={boards.length} paginate={paginate} />
			</div>
		</div>
	);
};

export default BoardList;
