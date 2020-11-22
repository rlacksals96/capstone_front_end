import React from 'react';


function BoardContainer({boards}){
    return(
        <tbody>
            {boards.map((board, id) => (
                <tr>
                    <th>{board.id}</th>
                    <th>{board.title}</th>
                    <th>writer</th>
                    <th>20.11.22</th>
                    <th>1</th>
                </tr>
            ))}
        </tbody>
        
    
    )
}

export default BoardContainer;