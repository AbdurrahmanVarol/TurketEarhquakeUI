import React, { useState, useContext, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import MyContext from "../contexts/MyContext";

function PaginationComponent() {
  const { currentPage, siteType, totalPage, setTotalPage } =
    useContext(MyContext);

  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages([]);
    for (let index = 0; index < totalPage; index++) {
      setPages((prev) => [...prev, index + 1]);
    }
  }, [totalPage]);
  return (
    <div>
      <Pagination>
        <PaginationItem>
          <Link
            className={`page-link ${currentPage == 1 ? "disabled" : ""}`}
            to="/earthquakes"
            state={{ siteType, currentPage: 1 }}
          >
            {"«"}
          </Link>
        </PaginationItem>
        <PaginationItem>
          <Link
            className={`page-link ${currentPage - 1 <= 0 ? "disabled" : ""}`}
            to="/earthquakes"
            state={{ siteType, currentPage: currentPage - 1 }}
          >
            {"‹"}
          </Link>
        </PaginationItem>
        {pages.map((item) => (
          <PaginationItem key={item}>
            <Link
              className={`page-link ${currentPage == item ? "active" : ""}`}
              to="/earthquakes"
              state={{ siteType, currentPage: item }}
            >
              {item}
            </Link>
          </PaginationItem>
        ))}
        <PaginationItem>
          <Link
            className={`page-link ${
              currentPage + 1 > totalPage ? "disabled" : ""
            }`}
            to="/earthquakes"
            state={{ siteType, currentPage: currentPage + 1 }}
          >
            {"›"}
          </Link>
        </PaginationItem>
        <PaginationItem>
          <Link
            className={`page-link ${
              currentPage == totalPage ? "disabled" : ""
            }`}
            to="/earthquakes"
            state={{ siteType, currentPage: totalPage }}
          >
            {"»"}
          </Link>
        </PaginationItem>
      </Pagination>
    </div>
  );
}

export default PaginationComponent;
