import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Upload from './pages/Upload/Upload';
import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
        <Route path='/' element={<App />}></Route>
        <Route path='/upload' element={<Upload />}></Route>
    </Routes>
  </BrowserRouter>

);

reportWebVitals();
