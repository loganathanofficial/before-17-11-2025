import { useState } from "react";
import { Link } from "react-router-dom";
import AuraLogo from "../assets/AuraLogo.png";

export default function NaveBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-20 flex justify-between items-center md:py-6">
          <div className="flex-shrink-0 font-bold text-lg">
            <Link to="/">
              <img
                src={AuraLogo}
                alt="Aura Logo"
                className="w-19 object-contain"
              />
            </Link>
          </div>

          {/*menu for mobile */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            type="button"
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-violet-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
            aria-controls="mobile-menu"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            {menuOpen ? (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg" //{how to open this ask to sir}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex md:items-center md:space-x-8">
            <Link
              to="/"
              className="px-3 py-2 rounded-md text-gray-800 hover:bg-violet-500 hover:text-white transition"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="px-3 py-2 rounded-md text-gray-800 hover:bg-cyan-500 hover:text-white transition"
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="px-3 py-2 rounded-md text-gray-800 hover:bg-violet-500 hover:text-white transition"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop auth */}
          <div className="hidden md:flex md:items-center md:space-x-4 lg:rounded-l-2xl">
            <Link
              to="/signin"
              className="px-4 py-2 text-gray-800 hover:bg-cyan-500/10 hover:text-cyan-500 rounded-md transition"
            >
              Sign in
            </Link>
            <Link
              to="/login"
              className="px-4 py-2 text-gray-800 hover:bg-violet-500/10 hover:text-violet-500 rounded-md transition"
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile menu ----->  is this writting like seporate code for mobile and desktop is good or not*/} 
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden px-4 pb-4 space-y-1 bg-white shadow-sm rounded-b-md"
        >
          <nav className="flex flex-col space-y-1">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-violet-500 hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-cyan-500 hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 rounded-md text-gray-800 hover:bg-violet-500 hover:text-white transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="border-t border-gray-200 mt-2 pt-2 flex flex-col space-y-1">
            <Link
              to="/signin"
              className="block px-3 py-2 text-gray-800 hover:bg-cyan-500/10 hover:text-cyan-500 rounded-md transition"
              onClick={() => setMenuOpen(false)}
            >
              Sign in
            </Link>
            <Link
              to="/login"
              className="block px-3 py-2 text-gray-800 hover:bg-violet-500/10 hover:text-violet-500 rounded-md transition"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}