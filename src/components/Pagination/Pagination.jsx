import React from "react";
import PropTypes from "prop-types";
import "./Pagination.scss";
Pagination.propTypes = {
  pagination: PropTypes.object.isRequired,
  onPageChange: PropTypes.func,
};

Pagination.defaultProps = {
  onPageChange: null,
};

function Pagination(props) {
  const { pagination, onPageChange } = props;
  const { _page, _limit, _totalRows } = pagination;
  const totalPages = Math.ceil(_totalRows / _limit);

  function handleClick(newPage) {
    if (onPageChange) {
      onPageChange(newPage);
    }
  }

  return (
    <div className="pagination-wrapper">
      <button
        className="pagination-button"
        onClick={() => handleClick(_page - 1)}
        disabled={_page <= 1}
      >
        Pre
      </button>

      <p type="text" className="pagination-text">
        {_page} <span>/</span> {totalPages}
      </p>

      <button
        className="pagination-button"
        onClick={() => handleClick(_page + 1)}
        disabled={_page >= totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
