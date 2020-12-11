import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Container} from 'react-bootstrap'
import '../styles/BoardRead.css';
import Header from '../components/layout/Header'

function BoardRead({match}){
    
    const[board, setBoard] = useState([]);

    useEffect(() => {
		/* axios//`https://jsonplaceholder.typicode.com/posts/1`+id로 보내야함
			.get(`https://jsonplaceholder.typicode.com/posts/`+match.params.id)
			.then((res) => {
				console.log(res);
				setBoard(res.data);
			})
			.catch((err) => {
				console.log(err);
			}); */


		/* let myHeaders = new Headers();
		myHeaders.append("Authorization", "");
		myHeaders.append("Content-Type", "application/json");

		let requestOptions = {
			method: 'GET',
			headers: myHeaders,
			redirect: 'follow'
			};
		fetch(`https://jsonplaceholder.typicode.com/posts/`+match.params.id, requestOptions)
			.then(response => response.text())
			.then(result => console.log(result))
			.catch(error => console.log('error', error)); */

		/* let response = fetch(`https://jsonplaceholder.typicode.com/posts/`+match.params.id);

		if (response.ok) {
			let json = response.json();
			console.log(response);
			setBoard(json);
		} else {
			alert("HTTP-Error: " + response.status);
		} */
		fetch(`https://jsonplaceholder.typicode.com/posts/`+match.params.id)
				.then(res => res.json())
				.then(
					(result) => {
					setBoard(result);
				})
				.catch(error => console.log('error', error));
	},[match.params.id]);


    return(
		<div>
			<Header content={null}/>
			<Container className='container'>
            	<h3 className='title'>{board.title}</h3>
            	<p className='body'>{board.body}</p>
        	</Container>
		</div>
        
    )
}

export default BoardRead;