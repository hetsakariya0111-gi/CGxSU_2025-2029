import { Outlet } from 'react-router-dom';
import TopHeader from '../components/layout/TopHeader';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ChatIcon from '../components/layout/ChatIcon';

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopHeader />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ChatIcon />
    </div>
  );
};

export default MainLayout;