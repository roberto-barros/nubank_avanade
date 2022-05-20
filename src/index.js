import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import createGlobalStyle from './assets/styles/global';
import './index.css';
import App from './layout/App';
import Login from './layout/Login';
import Register from './layout/Register';

const GlobalStyle = createGlobalStyle;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <App /> }/>
        <Route path='/Register' element={ <Register /> }/>
        <Route path='/Login' element={ <Login /> }/>
      </Routes>
    </BrowserRouter>  
    <GlobalStyle />  
  </React.StrictMode>
);
