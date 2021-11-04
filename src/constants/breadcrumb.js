import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb(props) {
    const {listBread, currentPage}= props
    return (
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
            {
                listBread.map((item)=>{
                    return <li className="breadcrumb-item ms-sm-2"><Link to={item.path}> {item.pageName} </Link></li>
                })
            }
          <li className="breadcrumb-item active text-dark" aria-current="page">
            <b>{currentPage}</b>{" "}
          </li>
        </ol>
      </nav>
    );
}

export default Breadcrumb;