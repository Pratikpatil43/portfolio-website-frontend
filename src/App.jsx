import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import Cursor from './components/cursor/Cursor';
import Contact from './components/client_contact/client_contact'; // Correct component import
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Loader from './components/Loader/Loader'
import { Analytics } from "@vercel/analytics/react"

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for loading data or content
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);
 
 
   
  return (

   
    <Router>
      <div>
      <div>
    {loading ? <Loader /> : <div></div>}
  </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<>
          <Analytics/>
            <Home />
            <Resume />
            <Projects />
            <Footer />
            <Cursor />
          </>} />
          <Route path="/contact" element={<>
            <Contact />
          </>} />
        </Routes>
     <Analytics />

      </div>
    </Router>
  );
};

export default App;
