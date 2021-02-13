import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';

const useRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/store/:type" element={<Home />} />
        <Route path="*" element={<Navigate to="/store/1" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default useRoutes;
