import React from 'react';

const BoardPagination = ({postsPerPage, totalPosts, paginate}) => {
    const PageNumbers = [];

    for (let i=1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        PageNumbers.push(i);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                {PageNumbers.map(number => (
                    <li 
                    key={number} 
                    className="page-item">
                        <a onClick={() => paginate(number)} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>

    )
}

export default BoardPagination;