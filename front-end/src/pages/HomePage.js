import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import ResortList from '../components/ResortList';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <div className="grid grid-row-3" id="main-container">
        <Header/>
        <main>
          <Hero/>
          <ResortList/>
        </main>
        <Footer/>
    </div>
  );
};

export default HomePage;