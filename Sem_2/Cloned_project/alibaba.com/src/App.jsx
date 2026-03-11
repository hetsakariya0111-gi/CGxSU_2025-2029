import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Protection from './pages/Protection';
import Featured from './pages/Featured';

function App() {
  return (
    <Router>
      <div className="font-sans bg-white text-gray-900 min-h-screen flex flex-col">
        <TopBar />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/protection" element={<Protection />} />
            <Route path="/featured" element={<Featured />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;