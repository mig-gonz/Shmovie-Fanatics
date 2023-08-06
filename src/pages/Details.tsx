import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";

// grab reviews from  https://api.themoviedb.org/3/movie/movie_id/reviews?

const Details = () => {
  type Movie = {
    overview: string;
    title: string;
    backdrop_path: string;
    original_title: string;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: number;
  };

  const [movie, setMovie] = useState<Movie | null>(null);
  const { id } = useParams();

  const movieSearch = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const moviesById = () => {
      fetch(movieSearch)
        .then((res) => res.json())
        .then((data) => {
          setMovie(data);
        });
    };

    moviesById();
  }, []);

  return (
    <div className="card lg:card-side bg-base-100 border-x-4 border-purple-950">
      <div className=" lg:flex m-auto">
        <figure>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt="Album"
            className="ml-4 w-[200px] lg:w-[500px] "
          />
        </figure>
        <div className="ml-5 flex flex-col justify-center items-center">
          <h2 className="md:text-3xl text-2xl font-bold hero-header">
            {movie?.title}
          </h2>
          <p className="w-48 lg:w-96 mt-5 text-center">{movie?.overview}</p>

          <div className=" flex flex-col">
            <div className="stat place-items-center">
              <div className="stat-title">Release date</div>
              <div className="stat-value">{movie?.release_date}</div>
              {/* <div className="stat-desc">From January 1st to February 1st</div> */}
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Revenue</div>
              <div className="stat-value text-secondary">{`$${movie?.revenue}`}</div>
              {/* <div className="stat-desc text-secondary">↗︎ 40 (2%)</div> */}
            </div>

            <div className="stat place-items-center">
              <div className="stat-title">Run time (mins)</div>
              <div className="stat-value">{movie?.runtime}</div>
              {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
            </div>
          </div>
          <button className="btn btn-primary w-32 mt-5">Trailer</button>
        </div>
      </div>
    </div>
  );
};

export default Details;
