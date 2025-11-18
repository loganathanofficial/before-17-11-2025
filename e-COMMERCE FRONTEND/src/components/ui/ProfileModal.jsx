import React from 'react';
import ProfilePage from './ProfilePage.jsx';

const ProfileModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-75 z-50 flex items-center justify-center">
      <div 
        className="relative bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900 text-3xl p-1 z-50 focus:outline-none transition duration-150 bg-white rounded-full"
          aria-label="Close Profile"
        >
          &times;
        </button>
        
        <ProfilePage /> 
        
      </div>
    </div>
  );
};

export default ProfileModal;