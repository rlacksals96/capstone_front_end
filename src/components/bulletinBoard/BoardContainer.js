import React from 'react';

function Board({board}){
    return(
        <tr>
            <th>1</th>
            <th>{board.title}</th>
            <th>장유수</th>
            <th>20.11.22</th>
            <th>3</th>
        </tr>
    )
}

function BoardContainer({boards}){
    return(
        <tbody>
            {boards.map((board, id) => (
                <Board board={board} key={id} />
            ))}
        </tbody>
        
    
    )
}

export default BoardContainer;