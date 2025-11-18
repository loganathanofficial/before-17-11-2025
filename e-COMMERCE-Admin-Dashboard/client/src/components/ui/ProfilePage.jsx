import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api/users';

function ProfilePage({ isOpen, onClose }) {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
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
    const fetchProfile = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get(`${API_BASE_URL}/admin`, {});
            const fetchedProfile = response.data;
            setProfile(fetchedProfile);
        } catch (err) {
            console.error("Profile fetch error:", err);
            const errorMessage = err.response?.data?.message || err.message;
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            fetchProfile();
        }
        return () => { };
    }, [isOpen]);
    if (!isOpen) {
        return null;
    }

    let content;

    if (loading) {
        content = (
            <div className="flex items-center justify-center p-8 h-full flex-grow">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
                <p className="ml-3 text-lg text-gray-600">Loading Profile...</p>
            </div>
        );
    } else if (error) {
        content = (
            <div className="p-6 h-full flex-grow">
                <h3 className="font-bold text-xl mb-2 text-red-700">Error Loading Profile</h3>
                <p className="text-red-700">{error}</p>
            </div>
        );
    } else if (!profile) {
        content = (
            <div className="p-6 text-yellow-700 h-full flex-grow">
                No profile data available.
            </div>
        );
    } else {
        content = (
            <div className='flex-grow overflow-y-auto'>
                <div className='flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-200'>
                    {/* Column 1: Profile Header (takes 1/3 width on medium screens and up) */}
                    <div className="p-6 md:w-1/3 text-center flex flex-col items-center">
                        <div className="mx-auto flex items-center justify-center h-28 w-28 rounded-full bg-indigo-500 text-white text-4xl font-bold mb-4 shadow-lg">
                            {profile.name.charAt(0)}
                        </div>
                        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">{profile.name}</h1>
                        <p className="text-md text-indigo-600 mt-1 font-semibold">Role: <span className="uppercase">{profile.role}</span></p>
                    </div>

                    {/* Column 2: Account Details (takes 2/3 width on medium screens and up) */}
                    <div className="p-6 md:w-2/3">
                        <div className="p-4 mb-4 bg-indigo-50 rounded-lg">
                            <h3 className="text-xl font-bold text-indigo-900">Account Details</h3>
                            <p className="text-sm text-indigo-700">Essential information about your shop owner account.</p>
                        </div>

                        <dl className="divide-y divide-gray-100 border-t border-b border-gray-100">
                            {/* Full Name Row */}
                            <div className="py-4 grid grid-cols-2 gap-4 items-center">
                                <dt className="text-md font-medium text-gray-500">Full Name</dt>
                                <dd className="text-md font-semibold text-gray-900">{profile.name}</dd>
                            </div>

                            {/* Email Row */}
                            <div className="py-4 grid grid-cols-2 gap-4 items-center">
                                <dt className="text-md font-medium text-gray-500">Email Address</dt>
                                <dd className="text-md font-semibold text-gray-900">{profile.email}</dd>
                            </div>

                            {/* Status Row */}
                            <div className="py-4 grid grid-cols-2 gap-4">
                                <dt className="text-md font-medium text-gray-500">Status</dt>
                                <dd>
                                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${profile.isActive ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {profile.isActive ? 'Active' : 'Inactive'}
                                    </span>
                                </dd>
                            </div>

                            <div className="py-4 grid grid-cols-2 gap-4"><dt className="text-md font-medium text-gray-500">Member Since</dt><dd className="text-md font-semibold text-gray-900">{new Date(profile.createdAt).toLocaleDateString()}</dd></div>
                        </dl>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div
            className="fixed inset-0 z-40"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="flex items-center justify-center h-screen text-center">
                <div
                    className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    aria-hidden="true"
                    onClick={onClose}
                ></div>

                <div className="inline-block w-11/12 max-w-screen-xl h-5/6 my-8 overflow-hidden rounded-xl bg-white text-left align-middle shadow-2xl transform transition-all z-50">
                    <div className="flex flex-col h-full">

                        <div className="p-4 bg-gray-50 flex-shrink-0 flex items-center justify-between border-b border-gray-200">
                            <h2 className="text-lg font-bold text-gray-900">Admin Profile</h2>
                            <button
                                type="button"
                                className="rounded-md text-gray-400 hover:text-gray-500"
                                onClick={onClose}
                            >
                                <span className="sr-only">Close modal</span>
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        <div className="overflow-y-auto flex-grow">
                            {content}
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;