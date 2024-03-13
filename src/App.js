import {BrowserRouter,Routes, Route} from 'react-router-dom';
import React from 'react';
import { ChakraProvider } from '@chakra-ui/react'


// import the pages
import Home from './pages/Home';
import Worship from './pages/Worship';
import Events from './pages/Events';
import AboutUs from './pages/AboutUs';

import Nav from './components/Nav';
import Footer from './components/Footer';


function App() {
  return(
    <ChakraProvider>
      <BrowserRouter>
      <Nav />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/worship" element={<Worship />} />
          <Route path="/events" element={<Events />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ChakraProvider>

  );
}

export default App;
