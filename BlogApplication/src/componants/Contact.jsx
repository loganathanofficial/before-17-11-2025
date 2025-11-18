import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
      window.scrollTo(0, 0);
    });
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 to-blue-200 px-4 py-12">
      <main className="w-full max-w-xl">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-900">Contact Us</h1>
        
        <form className="bg-white p-8 rounded-lg shadow-xl">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your full name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="your.email@example.com"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            />
          </div>
          
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-violet-400"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-violet-500 to-cyan-400 text-white py-3 rounded font-semibold hover:from-violet-600 hover:to-cyan-500 transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </main>
    </div>
  ); 
}

export default Contact;