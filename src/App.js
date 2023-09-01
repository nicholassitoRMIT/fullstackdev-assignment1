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

import "./fonts/FjallaOne-Regular.ttf";

function App() {
  //frUser = first render user
  const frUser = localStorage.getItem("currentUser") === null ? false : true
  const [hasUser, setHasUser] = useState(frUser)

  //hasUser state is used for conditional rendering based on whether a user is logged in or not.
  
  //Conditional rendering is used in the Navbar(Layout), Homepage and Movie page.
  //The state can be modified from the log-in, sign-up and profile pages(which has logging out)
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout hasUser = {hasUser}/>}>
            <Route index element={<Homepage hasUser = {hasUser}/>} />
            <Route path='movies' element={<MoviePage hasUser = {hasUser}/>} />
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
