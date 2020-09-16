import React from 'react'
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate, firstPage, lastPage }) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <a className='page-number' onClick={() => firstPage()} href="!#" >first page</a>
            <ul className="pagination" >
                {
                    pageNumbers.map(number => (
                        <li key={number} className='page-item' >
                            <a onClick={() => paginate(number)} href="!#" className="page-link" >
                                {number}
                            </a>
                        </li>
                    ))
                }
            </ul>
            <a className='page-number' href="!#" onClick={() => lastPage()} >last page</a>
        </nav>
    )
}

export default Pagination