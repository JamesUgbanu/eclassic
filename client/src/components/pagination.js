import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({ currentPage, pages }) => {
  const prevLink = parseInt(currentPage, 10) - 1;
  const nextLink = parseInt(currentPage, 10) + 1;

  return (
    <div className="pagination__div">
      <ul className="pagination">
        <li>
          {prevLink > 0 // Disable previous page link if showing the first page
            ? <Link to={`/admin-products/${prevLink}`}>Previous</Link>
            : <Link className='disabled__link'>Previous</Link>
                        }
        </li>
        <li>
          {nextLink <= pages // Disable next page link if showing the last page
            ? <Link to={`/admin-products/${nextLink}`}>Next</Link>
            : <Link className='disabled__link'>Next</Link>
                        }
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
