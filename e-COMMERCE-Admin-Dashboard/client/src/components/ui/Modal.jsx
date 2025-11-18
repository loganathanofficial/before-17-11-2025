import React, { useEffect } from 'react'; 

const Modal = ({ isOpen, onClose, title, children }) => {
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50 transition-opacity"
        >
            
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-lg p-6 m-4"
            >
                
                <div className="flex justify-between items-center border-b pb-3 mb-4">
                    <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                    <button 
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-900 text-2xl leading-none"
                        aria-label="Close modal"
                    >
                        &times; 
                    </button>
                </div>

                <div className="modal-body max-h-[80vh] overflow-y-auto"> 
                    {children}
                </div>
                
            </div>
        </div>
    );
};

export default Modal;