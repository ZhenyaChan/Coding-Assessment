import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const AboutPage = () => {
  return (
    <div className="grid grid-row-3" id="main-container">
        <Header/>
        <main>
          <div className='container'>
            <h1>About us</h1>
            <p>
              Description
            </p>
          </div>

        </main>
        <Footer/>
    </div>
  )
}

export default AboutPage