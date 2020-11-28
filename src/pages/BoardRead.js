import React, { useState,useEffect } from 'react';
import axios from 'axios';
import {Container} from 'react-bootstrap'
import '../styles/BoardRead.css';

function BoardRead({match}){
    
    const[board, setBoard] = useState([]);

    useEffect(() => {
		axios//`https://jsonplaceholder.typicode.com/posts/1`+id로 보내야함
			.get(`https://jsonplaceholder.typicode.com/posts/`+match.params.id)
			.then((res) => {
				console.log(res);
				setBoard(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	},[match.params.id]);


    return(
        <Container className='container'>
            <h3>{board.title}</h3>
            <p>{board.body}</p>
        </Container>
    )
}

export default BoardRead;