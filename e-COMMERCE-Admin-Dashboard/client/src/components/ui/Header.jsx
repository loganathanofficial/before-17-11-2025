import React, { useState } from 'react';
import ProfileModal from './ProfilePage.jsx';
import { Link } from 'react-router-dom';


const currentUser = {
  name: "Loganathan",
  initials: "LO",
  role: "ADMIN",
  isLoggedIn: true,
};

const Header = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    alert("Logged out and token removed.");
    
    setIsDropdownOpen(false);
  };
  
  const handleOpenProfileModal = () => {
    setIsProfileModalOpen(!isProfileModalOpen);
    setIsDropdownOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 bg-white shadow-md p-4 pl-64 z-20"> 
        <div className="flex justify-between items-center">
          
          <Link to="/" className="text-xl font-semibold pl-4 text-gray-800 hover:text-indigo-600 transition duration-150">
           Activity Monitor
          </Link>
          
          <div className="flex items-center space-x-4 relative">
            
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 focus:outline-none"
              >
                <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {currentUser.initials}
                </div>
              </button>
              
              {isDropdownOpen && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-1 border border-gray-100 z-30"
                >
                  <div className="px-4 py-2 text-sm text-gray-700 border-b border-gray-100">
                    <p className="font-semibold">{currentUser.name}</p>
                    <p className="text-xs text-gray-500">{currentUser.role}</p>
                  </div>
                  
                  <button 
                    onClick={handleOpenProfileModal}
                    className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition duration-150"
                  >
                    View Profile
                  </button>

                  <hr className="my-1 border-gray-100" />
                  
                  <button
                    onClick={handleLogout}
                    className="w-full text-left block px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition duration-150"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <ProfileModal 
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)} 
      />
    </>
  );
};

export default Header;