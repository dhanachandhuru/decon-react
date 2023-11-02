import React from 'react'
import About from './About';
import {Routes, Route, Link } from "react-router-dom";
import Home2 from "./Home2"
export default function Home() {
  return (
    <>
    <main>
      <h1>Welcome to the homepage</h1>
      <p>you can do this, I believe  in you.</p> 
     </main>
     <nav>
      <ul>
        <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      </ul>
     </nav>
     <Routes>
      <Route path='/' element={<Home2/>}/>
        <Route path='/about' element={<About/>} />
     </Routes>
    </>
  );
}