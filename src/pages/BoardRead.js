import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Container} from 'react-bootstrap'
import '../styles/BoardRead.css';
import Header from '../components/layout/Header'
import url from '../components/url'

function BoardRead({match}){
	const[board, setBoard] = useState([]);
	
	useEffect(() => {
		let myHeaders = new Headers();
		myHeaders.append("Authorization", "");
		myHeaders.append("Content-Type", "application/json");

		let requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
		};
		// fetch(`https://jsonplaceholder.typicode.com/posts`)//url()+"/board?name=jawoo"
		fetch(url()+"/board/?name=jawoo&id="+match.params.id)//여기서 보드id든 뭐든 구분할수 잇는걸 받아와야함
			.then(res => {
				console.log(res)
				return res.json()})
			.then(
				(result) => {
					// setLoading(true);
					// setBoards(result);
					console.log(result);
					setBoard(result);
					// console.log("result:"+boards);
					
				})
			.catch(error => console.log('error', error));

	}, [match.params.id]);

    return(
		<div>
			<Header content={null}/>
			<Container className='container'>
            	<h3 className='title'>{board.title}</h3>
            	<p className='body'>{board.content}</p>
        	</Container>
		</div>
        
    )
}

export default BoardRead;