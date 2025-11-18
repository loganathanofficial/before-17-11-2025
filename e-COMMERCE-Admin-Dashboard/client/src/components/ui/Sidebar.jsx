import React from 'react';
import { Link, useLocation } from 'react-router-dom'; 

const Sidebar = () => {
  const location = useLocation(); 

  const navItems = [
    { name: 'Dashboard', icon: '📊', path: '/' },
    { name: 'Orders', icon: '🛒', path: '/orders' },
    { name: 'Products', icon: '📦', path: '/products' },
    { name: 'Customers', icon: '👤', path: '/customers' },
  ];

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-600 text-white p-4 shadow-lg flex flex-col z-30">

      <nav className="flex-1">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`block py-2.5 px-4 rounded transition duration-200 mb-2 ${
              location.pathname === item.path 
                ? 'bg-gray-800 font-medium' 
                : 'hover:bg-gray-700'
            }`}
          >
            {item.icon} {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;