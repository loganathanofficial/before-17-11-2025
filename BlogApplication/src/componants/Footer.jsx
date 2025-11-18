import { Link } from "react-router-dom";
import AuraLogo from "../assets/AuraLogo.png"

function Footer() {

  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <div className="flex-shrink-0 font-bold text-lg caret-amber-800">
            <Link to="/">
              <img
                src={AuraLogo}
                alt="Aura Logo"
                className=" w-19 object-contain"
              />
            </Link>
          </div>
          <p className="text-gray-400 max-w-xs">
            Sharing insightful articles and tutorials on web development and design.
          </p>
        </div>

        <div className="flex space-x-8">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/blog" className="hover:text-white transition">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
         
        </div>
      </div>

      <div className="mt-6 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} My Blog. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
