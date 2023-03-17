import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import MapComponent from "./components/MapComponent";
import NotFound from './components/NotFound';
import DefaultLayout from './layouts/DefaultLayout';
import List from './components/EarthquakeList';
import { MyContextProvider } from './contexts/MyContext';


function App() {
  return (
    <div>
      <MyContextProvider>
        <BrowserRouter>        
          <Routes>
            <Route element={<DefaultLayout></DefaultLayout>}>
              <Route index element={<Home />}></Route>
              <Route path="earthquakes" element={<List />}></Route>
              <Route path="map" element={<MapComponent />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </MyContextProvider>
    </div>
  );
}

export default App;
