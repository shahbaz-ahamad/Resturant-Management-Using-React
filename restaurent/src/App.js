import React from 'react';
import Home from './pages/Home'; // Import your page components
import About from './pages/About';
import Service from './pages/Service';
import Menu from './pages/Menu';
import Booking from './pages/Booking';
import Team from './pages/team';
import Testimonial from './pages/testimonial';
import Contact from './pages/Contact';
// import { Outlet } from 'react-router-dom';


function App() {
  return (
    <>
   <Home/>
   {/* <Outlet/> */}
   {/* <About/>
   <Booking/>
   <Menu/>
   <Service/>
   <Team/>
   <Testimonial/>
   <Contact/> */}

    </>
  );
}

export default App;
