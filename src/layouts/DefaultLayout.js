import React from "react";
import { Outlet } from "react-router-dom";
import Navi from "../components/Navi";

function DefaultLayout() {
  return (
    <div className='text-center'>
        <h1 className='text-danger p-3' style={{height:"10vh"}}>Deprem Bilgi Sistemi</h1>
      <Navi></Navi>
      <div className="container mt-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default DefaultLayout;
