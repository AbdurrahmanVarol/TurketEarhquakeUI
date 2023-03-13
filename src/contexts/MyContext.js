import React, { createContext, useState, useEffect } from "react";

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();
  const [siteType, setSiteType] = useState(1);

  const values = {
    currentPage,
    setCurrentPage,
    totalPage,
    setTotalPage,
    siteType,
    setSiteType,
  };

  return <MyContext.Provider value={values}>{children}</MyContext.Provider>;
};

export default MyContext;
