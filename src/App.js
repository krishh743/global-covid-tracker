import React from 'react';
import Continent from './pages/Continent';
import Countries from "./pages/Countries";
import Final from './pages/Final';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
      <div className="App">
        {/* <Final /> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Final />} />
            <Route path="/Continent" element={<Continent />} />
            <Route path="/Countries" element={<Countries />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
} 




export default App;
