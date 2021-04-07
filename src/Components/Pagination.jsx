import React from 'react';
import '../CSS/PaginationStyle.css';
// import { PaginationItem } from 'semantic-ui-react';

const Pagination = ({recipesPerPage,totalRecipes,paginate}) =>{

    const pageNumbers = [];

    for (let i=1 ; i <= Math.ceil(totalRecipes/recipesPerPage) ; i++){
        pageNumbers.push(i);
    }

    return (
        <div className="pagination">
            <ul >
                {
                    pageNumbers.map((number)=>(
                        <li key={number} className="pageNumber">
                            <p onClick={()=>paginate(number)} className="pageLink" style={{cursor:'pointer'}}>
                                {number}
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

}

export default Pagination;