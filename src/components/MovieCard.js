import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "https://via.placeholder.com/200x300";

  // Format the release date
  const formattedDate = movie.release_date
    ? new Date(movie.release_date).toLocaleDateString("en-GB") // 'en-GB' formats to dd/mm/yyyy
    : "Unknown Date";

  return (
    <div className="movie-card flex flex-col items-center bg-gray-800 border border-gray-700 rounded-lg overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105">
      <Link to={`/movie/${movie.id}`} className="block w-full">
        <img
          src={posterUrl}
          alt={movie.title}
          className="w-full md:h-48 h-auto object-cover md:object-scale-down"
        />
        <div className="p-4 ">
          <h3 className="text-xl font-semibold text-white truncate">{movie.title}</h3>
          <p className="mt-2 text-sm text-gray-400">Release Date: {formattedDate}</p>
          <p className="mt-2 text-sm text-yellow-400">
            <strong>Rating:</strong> {movie.vote_average} / 10
          </p>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
