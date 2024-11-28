import React from "react";
import SearchBar from "./SearchBar"; 
import logo from "../images/logomovies.jpeg"
const Header = ({ query, setQuery, handleSearch }) => {
  return (
    <header className="bg-gray-800 text-white flex   gap-2 md:items-center justify-between px-6 py-4 shadow-lg">
   
      <div className="flex items-center md:w-full">
        <img
          src={logo} 
          alt="Logo"
          className="h-8"
        />
        <div className="flex-grow mx-4 md:block hidden">
        <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      </div>
      </div>

      
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
