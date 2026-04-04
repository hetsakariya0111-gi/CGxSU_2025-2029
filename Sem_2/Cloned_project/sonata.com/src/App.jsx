import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import MensWatchesPage from './pages/MensWatchesPage';
import WomensWatchesPage from './pages/WomensWatchesPage';
import WatchesPage from './pages/WatchesPage';
import SFWatchesPage from './pages/SFWatchesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="men" element={<MensWatchesPage />} />
          <Route path="women" element={<WomensWatchesPage />} />
          <Route path="watches" element={<WatchesPage />} />
          <Route path="sf-watches" element={<SFWatchesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;