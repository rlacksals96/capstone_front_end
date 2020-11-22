import React from 'react';

function BoardList() {
    return(
        <table>
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
                <tr>
                    <th>1</th>
                    <th>asdgh</th>
                    <th>장유수</th>
                    <th>20.11.22</th>
                    <th>3</th>
                </tr>
            </tbody>
        </table>
        
    )
}

export default BoardList;