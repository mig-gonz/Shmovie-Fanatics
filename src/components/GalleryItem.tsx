import { useState, useEffect } from "react";

// make single card on mobile, add arrow button to see next movie for desktop and mobile.
// reuse component, add different buttons for movie types and set to change state

const GalleryItem = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  const apiKey = "api_key=55f130ea060d300d440fc9bf79c531c8";
  const randomMovieSearch = `https://api.themoviedb.org/3/discover/movie?${apiKey}`;

  useEffect(() => {
    const randomMovies = () => {
      fetch(randomMovieSearch)
        .then((res) => res.json())
        .then((data) => {
          setMovies(data.results);
        });
    };

    randomMovies();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="overflow-x-auto w-5/6">
        <div className="flex space-x-4">
          {movies.map((movie: any) => (
            <div className="card w-96 image-full" key={movie.id}>
              <figure>
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                  alt={movie.title}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{movie.title}</h2>
                <p>Released: {movie.release_date}</p>
                <div className="card-actions justify-end">
                  {/* <button className="btn btn-primary">Buy Now</button> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default GalleryItem;
