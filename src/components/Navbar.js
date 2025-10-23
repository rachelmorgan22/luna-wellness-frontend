import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu automatically when a link is clicked
  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="flex items-center">
      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6 items-center">
        <Link to="/" onClick={handleLinkClick} className="text-gray-700 hover:text-green-700">
          Home
        </Link>
        <Link to="/about" onClick={handleLinkClick} className="text-gray-700 hover:text-green-700">
          About
        </Link>
        <Link to="/classes" onClick={handleLinkClick} className="text-gray-700 hover:text-green-700">
          Classes
        </Link>
        <Link to="/contact" onClick={handleLinkClick} className="text-gray-700 hover:text-green-700">
          Contact
        </Link>
      </div>

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 hover:text-green-700 focus:outline-none text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 right-0 w-full bg-white shadow-lg px-6 py-4 space-y-2">
          <Link to="/" onClick={handleLinkClick} className="block text-gray-700 hover:text-green-700">
            Home
          </Link>
          <Link to="/about" onClick={handleLinkClick} className="block text-gray-700 hover:text-green-700">
            About
          </Link>
          <Link to="/classes" onClick={handleLinkClick} className="block text-gray-700 hover:text-green-700">
            Classes
          </Link>
          <Link to="/contact" onClick={handleLinkClick} className="block text-gray-700 hover:text-green-700">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}