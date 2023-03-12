import './App.css';
import React,{useState,useEffect} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MapComponent from "./components/MapComponent";
import NotFound from './components/NotFound';
import DefaultLayout from './layouts/DefaultLayout';
import List from './components/EarthquakeList';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout></DefaultLayout>}>
            <Route index element={<Home />}></Route>
            <Route path='earthquakes/:id' element={<List/>}></Route>
            <Route path="map" element={<MapComponent />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
