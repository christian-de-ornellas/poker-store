import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';

const useRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/store/:type" element={<Home />} />
        <Route path="/pokemon/:name" element={<Details />} />
        <Route path="*" element={<Navigate to="/store/1" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default useRoutes;
