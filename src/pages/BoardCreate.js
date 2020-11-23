import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import Header from "../components/layout/Header";

function BoardCreate(){
    return(
        <div>
            <Header/>
                <Container style={{marginTop:'100px'}}>
                    <Form>
                        <Form.Group controlId="title">
                            <Form.Label>제목</Form.Label>
                            <Form.Control placeholder="제목을 입력하세요." />
                        </Form.Group>
                            <Form.Group controlId="content">
                            <Form.Label>내용</Form.Label>
                            <Form.Control as="textarea" rows={5} placeholder="내용을 입력하세요." />
                        </Form.Group>
                        <Form.Group>
                            <Form.File id="file" label="첨부파일" />
                        </Form.Group>
                    </Form>
                    <Button as="input" type="submit" value="저장" />{' '}
                </Container>
        </div>
        
        
    )
}

export default BoardCreate;