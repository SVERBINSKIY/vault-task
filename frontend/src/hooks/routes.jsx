import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import LoginPage from 'pages/Auth';
import AboutPage from 'pages/About';
import HomePage from 'pages/Home';
import ProductsPage from 'pages/Products'

export const useRoutes = (isAuth) => {
  if (isAuth) {
    return (
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/products" element={<ProductsPage />} exact />
        <Route path="/about" element={<AboutPage />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    )
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} exact />
      <Route path="/about" element={<AboutPage />} exact />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}