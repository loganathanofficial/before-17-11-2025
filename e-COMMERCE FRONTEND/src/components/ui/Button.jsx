import React from 'react';

const Button = ({ children, onClick, className = '', ...props }) => {
  return (
    <button
      onClick={onClick}
      className={`
        inline-flex items-center justify-center 
        px-4 py-2 border border-transparent 
        text-sm font-medium rounded-md shadow-sm 
        transition duration-150 ease-in-out 
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
        ${className} 
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;