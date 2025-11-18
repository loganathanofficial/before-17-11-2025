import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import NaveBar from './NavBar';
import './css/layout.css';


function Layout() {
  return (
    <div
      id="layout"
      className="flex flex-col min-h-screen bg-gray-50 overflow-x-hidden"
    >
      <NaveBar />

      <main className="flex-grow max-w-7xl w-full mx-auto md:px-8 sm:py-3 md:py-2 lg:py-5">
        <Outlet /> {/* Page content renders  */}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
