import React from "react";

const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-2"
    >
      <input
        type="text"
        placeholder="Search for a movie..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full px-4 py-2 bg-gray-700 text-white placeholder-gray-400 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        type="submit"
        className="ml-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
