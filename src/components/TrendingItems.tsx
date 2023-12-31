import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const GalleryItem = () => {
  const [movies, setMovies] = useState([]);

  const randomMovieSearch = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;

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

  const customScrollbarStyle = `
    /* Hide the scrollbar */
    ::-webkit-scrollbar {
      display: none;
    }
  `;

  return (
    <div className="flex justify-center w-48 md:w-[32rem] lg:w-full m-auto">
      <div className="overflow-x-auto flex justify-center">
        <style>{customScrollbarStyle}</style>
        <div className="flex space-x-4">
          {movies.splice(0, 5).map((movie: any) => (
            <div className="relative group" key={movie.id}>
              <Link to={`/movies/${movie.id}`}>
                <figure className="w-48 xl:w-52 h-72 relative rounded-lg border-2 border-x-gray-400 overflow-hidden">
                  <img
                    className="h-full w-full object-cover transition-opacity duration-300"
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-900 via-purple-950 to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>

                  <h2 className="card-title h-20 absolute bottom-0 left-0 right-0 p-4 text-white bg-black bg-opacity-50">
                    {movie.title}
                  </h2>
                </figure>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default GalleryItem;
