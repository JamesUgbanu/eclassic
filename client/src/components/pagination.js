import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pagination = ({ currentPage, pages, currentUrl }) => {
  const prevLink = parseInt(currentPage, 10) - 1;
  const nextLink = parseInt(currentPage, 10) + 1;

  return (
    <div className="pagination__div">
      <ul className="pagination">
        <li>
          {prevLink > 0 // Disable previous page link if showing the first page
            ? <Link to={`/${currentUrl}/${prevLink}`}>Previous</Link>
            : <Link className='disabled__link'>Previous</Link>
                        }
        </li>
        <li>
          {nextLink <= pages // Disable next page link if showing the last page
            ? <Link to={`/${currentUrl}/${nextLink}`}>Next</Link>
            : <Link className='disabled__link'>Next</Link>
                        }
        </li>
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  currentPage:PropTypes.number,
  pages: PropTypes.number,
  currentUrl: PropTypes.string
};

export default Pagination;
