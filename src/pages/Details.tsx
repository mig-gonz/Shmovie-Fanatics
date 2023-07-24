import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

// grab reviews from  https://api.themoviedb.org/3/movie/movie_id/reviews?

const Details = () => {
  type Movie = {
    backdrop_path: string;
    original_title: string;
    poster_path: string;
  };

  const [movie, setMovie] = useState<Movie | null>(null);
  const { id } = useParams();

  const apiKey = "api_key=55f130ea060d300d440fc9bf79c531c8";
  const movieSearch = `https://api.themoviedb.org/3/movie/${id}?${apiKey}`;

  useEffect(() => {
    const moviesById = () => {
      fetch(movieSearch)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setMovie(data);
        });
    };

    moviesById();
  }, []);

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl border-x-4 border-purple-950">
      <figure>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
          alt="Album"
          className="ml-4"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Listen</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
