import React, { useState } from "react";
import axios from "axios";
import Header from "./Header";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

const MovieSearchApp = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMovies = async () => {
    const apiKey = "8cd401b76ad8c68479f542c7bea42d3d";
    const url = "https://api.themoviedb.org/3/search/movie";

    try {
      setLoading(true);
      const response = await axios.get(url, {
        params: {
          query,
          api_key: apiKey,
        },
      });
      setMovies(response.data.results);
      setError("");
    } catch (err) {
      setError("Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchMovies();
    }
  };

  return (
    <div>
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
     <div className="">
     <div className="search-mbl md:hidden block p-3">
     <SearchBar query={query} setQuery={setQuery} handleSearch={handleSearch} />
      </div>
     <h2 className="text-5xl p-5">Advanced title search</h2>
     <p className="p-5">Discover IMDb's robust title search. Mix and match info to refine your searches. Looking for 1970s Canadian horror films rated above 6 by at least 100 users? Find them here. All fields below are optional, but at least one is needed for a search. For ranges (release date, votes), use 'min' for larger/after and 'max' for smaller/before. You can also press 'Enter' after checking a box or focusing on a field.</p>
     </div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <MovieList movies={movies} />
    </div>
  );
};

export default MovieSearchApp;
