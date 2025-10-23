import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50 h-16">
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-6">
        {/* Logo / Site Name */}
        <Link to="/">
        <h1 className="text-2xl font-bold text-green-700">Luna Wellness</h1>
        </Link>

        {/* Navbar */}
        <Navbar />
      </div>
    </header>
  );
}
