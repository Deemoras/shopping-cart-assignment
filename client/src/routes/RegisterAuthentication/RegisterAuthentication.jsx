import React from 'react';
import Register from '../../components/Register/Register';
import Navbar from '../../components/NavBar/Navbar';
import './RegisterAuth.scss'

export default function RegisterAuthentication() {
  return (
    <main>
      <Navbar/>
      <section className="register-Auth-container">
          <div className='Auth-container text-content'>
              <h1 className='register-Auth-Text-Style'>Sign Up</h1>
              <p className='register-Auth-Text-Style'>We do not share your personal details with anyone</p>
          </div>
          <div className='Auth-container'>
            <Register/>
          </div>
      </section>
    </main>
  )
}
