import React, { useState } from 'react';
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
import ProfilePage from './Pages/ProfilePage';

function App() {
  const frUser = localStorage.getItem("currentUser") === null ? false : true
  const [hasUser, setHasUser] = useState(frUser)

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout hasUser = {hasUser}/>}>
            <Route index element={<Homepage/>} />
            <Route path='movies' element={<MoviePage/>} />
            <Route path='log-in' element={<LogInPage setHasUser = {setHasUser}/>} />
            <Route path='sign-up' element={<SignUpPage setHasUser = {setHasUser}/>} />
            <Route path='profile' element={<ProfilePage setHasUser = {setHasUser}/>} />
            <Route path='*' element={<Homepage/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
