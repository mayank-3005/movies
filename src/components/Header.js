import React from "react";
import SearchBar from "./SearchBar"; // Import your SearchBar component
import logo from "../images/logomovies.jpeg"
const Header = ({ query, setQuery, handleSearch }) => {
  return (
    <header className="bg-gray-800 text-white flex items-center justify-between px-6 py-4 shadow-lg">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo} // Replace with your logo path or use a URL
          alt="Logo"
          className="h-8"
        />
      </div>

      {/* Centered Search Bar */}
      <div className="flex-grow mx-4">
        <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      </div>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300">
          Watchlist
        </button>
        <button className="px-4 py-2 border border-white hover:bg-white hover:text-gray-800 text-white font-semibold rounded-md transition duration-300">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
