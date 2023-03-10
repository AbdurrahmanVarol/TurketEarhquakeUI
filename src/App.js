import './App.css';
import React,{useState,useEffect} from 'react'
import TabComponent from './components/TabComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MapComponent from "./components/MapComponent";
import NotFound from './components/NotFound';


function App() {
  return (
    <div className='container'>
      <BrowserRouter> 
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="map" element={<MapComponent />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
