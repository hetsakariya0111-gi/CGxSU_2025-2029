import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import TechnologyPage from './pages/TechnologyPage';
import LetsTalkPage from './pages/LetsTalkPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="technology" element={<TechnologyPage />} />
          <Route path="lets-talk" element={<LetsTalkPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;