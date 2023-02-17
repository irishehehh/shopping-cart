import React from 'react';
import {  Navigate, Route, Routes } from 'react-router-dom';


import Detail from './views/Detail';
import Cart from './views/Detail';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Navigate to="/home"   />} path ="/">
          

        </Route>
        <Route element={<Home/>} path='/home'>
     
        </Route>
        <Route element={<Detail/>} path="/detail/:id/:cid/:vid/:count">
      
        </Route>
        <Route element={<Cart/>} path="/cart">
      
        </Route>
      </Routes>
    </div>
  );
}

export default App;
