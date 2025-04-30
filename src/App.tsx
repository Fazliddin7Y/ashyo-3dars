import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroCarousel from './components/HeroCarousel'; // ⭐

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-gray-800">
        <Header />
        <HeroCarousel />

        {/* Routing uchun Routes va Route komponentlarini ishlatish */}
        <Routes>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Page</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
