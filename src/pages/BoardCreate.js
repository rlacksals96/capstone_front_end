import axios from 'axios';
import React,{useState} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import Header from "../components/layout/Header";
import url from '../components/url'
function BoardCreate({history}){
    const[inputs, setInputs] = useState({
        title: '',
        content: ''
    })

    const{title, content} = inputs;

    const onChange = (e) =>{
        const{value, name} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        })
    }


    const[file, setFile] = useState(null);

    const fileHandler = (e) =>{
        setFile(e.target.files[0]);
    }

    const postBoard = async () => {
        const formData = new FormData();
        formData.append('file', file);

        /* const config = {
            headers: {
                "content-type": "multipart/form-data"
            }
        } */
        
            /* const res = await axios.post(
                "https://jsonplaceholder.typicode.com/posts",
                {
                    title: {title},
                    content: {content}
                } ,
                formData *
                 , config)
                console.log(res);
                if(res.status === 201){
                    alert('저장되었습니다.');
                } */
        let myHeaders = new Headers();
        myHeaders.append("Authorization", "");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            name: title,
            board:'jawoo',
            content: content,
            email:localStorage.getItem('email')
            //board name content
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
            };
        
        let status=''
        fetch(url()+"/board/post", requestOptions)//"/url"
            .then(response => {
                status=response.status;
                // console.log(status);
                return response.json()
            })
            .then(result => {
                console.log(result)
                if(status===200){
                    alert("저장되었습니다.");
                    history.goBack();
                }
            })
            .catch(error => console.log('error', error));
    }

    return(
        <div>
            <Header content={null}/>
                <Container style={{marginTop:'100px'}}>
                    <Form>
                        <Form.Group controlId="title">
                            <Form.Label>제목</Form.Label>
                            <Form.Control 
                                name="title"
                                placeholder="제목을 입력하세요." 
                                onChange={onChange}
                                value={title}
                            />
                        </Form.Group>

                        <Form.Group controlId="content">
                            <Form.Label>내용</Form.Label>
                            <Form.Control 
                                as="textarea" rows={5} 
                                name="content"
                                placeholder="내용을 입력하세요."
                                onChange={onChange}
                                value={content}
                            />
                        </Form.Group>
                        
                        <Form.Group>
                            <Form.File 
                                id="file"
                                inputAs='input' 
                                name='file'
                                label="첨부파일"
                                /* multiple */
                                onChange={fileHandler} 
                            />
                                {/* <input type="file" onChange={fileHandler} /> */}
                        </Form.Group>
                    </Form>

                    <Button as="input" type="submit" value="저장" onClick={postBoard}/>
                </Container>
        </div>
        
        
    )
}

export default BoardCreate;