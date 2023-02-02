import React from "react";

const Pagination = ({ postPerPage, totalPosts, paginate }) => {
  const pageNumber = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <div className="text-center">
      {pageNumber.map((number) => {
        return (
          <div key={number} className="btn-group">
            <button
              onClick={() => {
                paginate(number);
              }}
              className={`btn border text-black bg-white hover:bg-red-600`}
            >
              {number}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Pagination;
