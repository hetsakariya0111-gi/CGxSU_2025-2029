import React from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';

import Dashboard from './pages/Dashboard';
import Explore from './pages/Explore';
import PincodeDetail from './pages/PincodeDetail';
import About from './pages/About';

function App() {
  const location = useLocation();

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-background transition-colors duration-300">
        <Navbar />
        <main className="flex-1 relative">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/pincode/:pincode" element={<PincodeDetail />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
