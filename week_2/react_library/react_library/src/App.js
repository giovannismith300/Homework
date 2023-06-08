import React, {useState, useEffect} from 'react';

import './App.css';
//import BookForm from './components/books/BookForm';
//import BookTable from './BookTable';
//import BookServices from './services/bookservices'
import Library from './components/books/Library'

import "bootstrap/dist/css/bootstrap.min.css"


import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/common/Navbar'
import LoginPage from './components/auth/LoginPage'
import RegisterPage from './components/auth/RegisterPage'

import { onAuthStateChanged } from 'firebase/auth';

import {auth} from './firebase/firebase'




function App() {
const [user, setUser] = useState(null)

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    setUser(user)
  })
}, [])
  
  return (
    <BrowserRouter>
    <Navbar user= {user}/>
    <Routes>
      <Route path="/" element={<LoginPage/>}></Route>
      <Route path="/library" element={<Library/>}></Route>
      <Route path="/register" element={<RegisterPage/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
