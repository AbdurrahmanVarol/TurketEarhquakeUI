import React from "react";
import { Outlet } from "react-router-dom";
import Navi from "../components/Navi";

function DefaultLayout() {
  return (
    <div className="container">
      <div className='text-center'>
        <h1 className='text-danger header p-3' style={{height:"10vh"}}>Earthquake Information App</h1>
      </div>
      <Navi></Navi>
      <div className="mt-5">
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default DefaultLayout;
