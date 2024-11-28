import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "https://via.placeholder.com/200x300";

  return (
    <div className="movie-card flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      <Link to={`/movie/${movie.id}`} className="block w-full">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full md:h-48 h-auto object-cover md:object-scale-down"
        />
        <div className="p-4 text-center">
          <h3 className="text-xl font-semibold text-white truncate">{movie.title}</h3>
          <p className="mt-2 text-sm text-gray-400">{movie.release_date}</p>
    
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
