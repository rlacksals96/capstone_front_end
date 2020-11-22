import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Table} from 'reactstrap';
import '../../styles/BulletinBoard.css';
import BoardContainer from './BoardContainer';

function BoardList() {
    const [boards, setBoards] = useState([]);

    useEffect(() => {
		axios
			.get(`https://jsonplaceholder.typicode.com/posts`)
			.then((res) => {
				if (res.status === 200) {
					console.log(res);
                    setBoards(res.data);
                    console.log(boards);
				} else {
					console.log("wrong status");
				}
			})
			.catch((err) => {
				console.log(err);
			});
    }, []);
    
     /* useEffect(() => {
         const fetchBoards = async () => {
             try{
                 setBoards(null);
                 const res = await axios.get(
                    `https://jsonplaceholder.typicode.com/posts`
                 );
                 console.log(res.data);
                 setBoards(res.data);
                 console.log(boards);
             }catch(e){
                 console.log(e);
             }
         }
         fetchBoards(); 
     },[]) */

    return(
        <div className="container">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>제목</th>
                        <th>작성자</th>
                        <th>작성일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                {/* <BoardContainer boards={boards}></BoardContainer> */}
            </Table>
        </div>
        
        
    )
}

export default BoardList;