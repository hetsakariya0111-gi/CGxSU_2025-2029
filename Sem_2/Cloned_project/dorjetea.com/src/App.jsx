import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LearnMorePage from './pages/LearnMorePage';
import BlogPage from './pages/BlogPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="learn" element={<LearnMorePage />} />
          <Route path="blog" element={<BlogPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;