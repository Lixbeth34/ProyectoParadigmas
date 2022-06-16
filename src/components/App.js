import React from 'react';
import CreateLink from './CreateLink';
import Header from './pages/Header';
import List from './List';

import Navbar from './navegacion/Navbar';
import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landingpage';

const App = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <Navbar/>
        
        <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<Landing/>} />
          <Route path="/comidasC" element={<List/>} />
          <Route path="/crealas" element={<CreateLink/>} />
          <Route path="/lugares" element={<Header/>} />
         </Routes>
        </div>
      </div>
    </div>
 </div>

     
     
  );
};

export default App;