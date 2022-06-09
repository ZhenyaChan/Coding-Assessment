import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const LoginPage = () => {
  return (
    <div className="grid grid-row-3" id="main-container">
        <Header/>
        <main>
          <p>Login Page</p>
        </main>
        <Footer/>
    </div>
  )
}

export default LoginPage