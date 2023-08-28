import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import './navbar.css';
import './form.css';
import './footer.css';

import Layout from './Pages/PageLayout';

import SignUpPage from './Pages/SignUpPage';
import Homepage from './Pages/Homepage';
import LogInPage from './Pages/LogInPage';
import MoviePage from './Pages/MoviesPage';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Homepage/>} />
            <Route path='movies' element={<MoviePage/>} />
            <Route path='log-in' element={<LogInPage/>} />
            <Route path='sign-up' element={<SignUpPage/>} />
            <Route path='*' element={<Homepage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
