import { Outlet } from 'react-router-dom';
import MusicHeader from '../components/MusicHeader';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <MusicHeader />
      <div className="app-layout">
        <Sidebar />
        <div className="main-content-wrapper">
          <main className="main-content">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;