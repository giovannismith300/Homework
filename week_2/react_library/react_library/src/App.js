import React, {useState, useEffect} from 'react';

import './App.css';
//import BookForm from './components/books/BookForm';
//import BookTable from './BookTable';
//import BookServices from './services/bookservices'
import Library from './components/books/Library'
import RequireAuth from './components/common/RequireAuth';

import "bootstrap/dist/css/bootstrap.min.css"


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar'
import LoginPage from './components/auth/LoginPage'
import RegisterPage from './components/auth/RegisterPage'
import Spinner from './components/common/Spinner';

import { onAuthStateChanged } from 'firebase/auth';

import {auth} from './firebase/firebase'




function App() {
const [user, setUser] = useState(null)
const [isUserUpdated, setIsUserUpdated] = useState(false)


useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    setUser(user)
    setIsUserUpdated(true)
  })
}, [])
  
  return (
    <BrowserRouter>
    <Navbar user= {user}/>
    {isUserUpdated ? (
    <Routes>
      <Route path="/" element={<LoginPage/>}></Route>
      
        <Route path="/library" element={
        <RequireAuth user = {user}>
          
          <Library user ={user}/> 
        </RequireAuth>
        
        }></Route>
      
      <Route path="/register" element={<RegisterPage/>}></Route>
    </Routes>
    ) : (
      <Spinner></Spinner>
    )}
    </BrowserRouter>
  );
}

export default App;
