import React from 'react';
import { Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Hero from '../components/features/Hero';
import NavBar from '../components/NavBar';

const Home: React.FC = () => {
  return (
    <div className='bg-custom-radial h-[100vh]'>
     <div className='container px-4 mx-auto'>
        <NavBar />
        <Hero />

     </div>

      {/* <Login /> */}
      {/* <Register /> */}
    </div>
  );
};

export default Home;
