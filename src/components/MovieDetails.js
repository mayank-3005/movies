import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [trailers, setTrailers] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const apiKey = "8cd401b76ad8c68479f542c7bea42d3d";
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const movieResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: { api_key: apiKey },
        });
        setMovie(movieResponse.data);
        const castResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
          params: { api_key: apiKey },
        });
        setCast(castResponse.data.cast);
        const trailerResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
          params: { api_key: apiKey },
        });
        setTrailers(trailerResponse.data.results);
        const reviewsResponse = await axios.get(`https://api.themoviedb.org/3/movie/${id}/reviews`, {
          params: { api_key: apiKey },
        });
        setReviews(reviewsResponse.data.results);

        setError("");
      } catch (err) {
        setError("Failed to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="movie-details max-w-5xl mx-auto bg-gray-800 text-white rounded-lg shadow-lg p-6 mt-6">
      <div className="flex flex-col md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 rounded-lg object-cover mb-4 md:mb-0 md:mr-4"
        />
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold mb-2">{movie.title}</h1>
          <p className="text-gray-400 mb-4">
            <strong>Release Date:</strong> {movie.release_date}
          </p>
          <p className="text-yellow-400 mb-4">
            <strong>Rating:</strong> {movie.vote_average} / 10
          </p>
          <p className="mb-4">
            <strong>Overview:</strong> {movie.overview}
          </p>
          <p className="mb-4">
            <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Cast</h2>
        <div className="grid md:grid-cols-5 grid-cols-2 gap-4">
          {cast.slice(0, 5).map((actor) => (
            <div key={actor.id} className="flex flex-col items-center mr-4 mb-4">
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={actor.name}
                className="w-40 h-40 rounded-full object-cover mb-2"
              />
              <p className="text-center text-white">{actor.name}</p>
              <p className="text-center text-gray-400 text-sm">{actor.character}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Trailers</h2>
        {trailers.length > 0 ? (
          <div className="grid md:grid-cols-4 gap-4">
            {trailers.map((trailer) => (
              <div key={trailer.id} className="mb-4 w-full md:w-full lg:w-full">
                <iframe
                  className="w-full h-70"
                  src={`https://www.youtube.com/embed/${trailer.key}`}
                  title={trailer.name}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))}
          </div>
        ) : (
          <p>No trailers available.</p>
        )}
      </div>

      <div className="mt-6">
  <h2 className="text-2xl font-bold mb-4">Reviews</h2>
  {reviews.length > 0 ? (
    <div>
      {reviews.map((review) => (
        <div
          key={review.id}
          className="mb-4 bg-gray-800 p-4 rounded-lg shadow-md transition hover:shadow-lg"
        >
          <p className="text-white font-semibold">{review.author}</p>
          <p className="text-gray-400 text-sm mt-2 line-clamp">
            {review.content}
          </p>
        </div>
      ))}
    </div>
  ) : (
    <p>No reviews available.</p>
  )}
</div>

    </div>
  );
};

export default MovieDetails;
