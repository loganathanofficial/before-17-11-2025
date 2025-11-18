
import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../ui/Sidebar';
import Header from '../ui/Header';

const RootLayout = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    
      <Sidebar />
     <Header />
      
      <main className="ml-64">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;