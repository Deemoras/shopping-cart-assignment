import React from 'react'
import Login from '../../components/Login/Login'
import Navbar from '../../components/NavBar/Navbar'
import './LoginAuthenticationStyle.scss'

export default function LoginAuthentication() {
  return (
    <main>
      <Navbar/>
      <section className="login-Auth-container">
          <div className='Auth-container text-content'>
              <h1 className='Login-Auth-Text-Style'>Login</h1>
              <p className='Login-Auth-Text-Style'>Get access to your Orders, Wishlist and Recommendation</p>
          </div>
          <div className='Auth-container'>
            <Login/>
          </div>
      </section>
    </main>
  )
}
