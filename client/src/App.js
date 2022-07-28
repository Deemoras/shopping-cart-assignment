import React from 'react'
import HomePage from './routes/HomePage/HomePage';
import RegisterAuthentication from './routes/RegisterAuthentication/RegisterAuthentication';
import LoginAuthentication from './routes/LoginAuthentication/LoginAuthentication';
import { Routes, Route } from "react-router-dom";
import ProductListPage from './routes/ProductPage/ProductListPage';


function App() {

  return (
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="products" element={<ProductListPage />} />
      <Route path="register" element={<RegisterAuthentication/>}/>
      <Route path="login" element={<LoginAuthentication />}/>
    </Routes>
  );
}

export default App;
