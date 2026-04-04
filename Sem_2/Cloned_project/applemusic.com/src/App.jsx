import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import NewPage from './pages/NewPage';
import RadioPage from './pages/RadioPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="new" element={<NewPage />} />
          <Route path="radio" element={<RadioPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;