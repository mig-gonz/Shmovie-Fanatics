import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Display = () => {
  type Movie = {
    title: string;
    overview: string;
    backdrop_path: string;
    id: number;
    poster_path: string;
  };

  const [movies, setMovies] = useState<Movie[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  const randomMovieSearch = `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}`;

  useEffect(() => {
    const fetchRandomMovies = async () => {
      try {
        const response = await fetch(randomMovieSearch);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching random movies:", error);
      }
    };

    fetchRandomMovies();

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1022);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [randomMovieSearch]);

  const randomIndex = Math.floor(Math.random() * movies.length);
  const randomMovie = movies[randomIndex];

  const randomTitle = randomMovie?.title || "";
  const randomContent = randomMovie?.overview || "";
  const posterPath = randomMovie?.poster_path || "";

  const maxCharacters: number = 255;

  return (
    <div className="flex justify-center h-[32rem] mt-8">
      <div className="h-full">
        <div className="hero-content m-auto flex-col lg:flex-row h-full">
          <img
            src={`https://image.tmdb.org/t/p/w500${posterPath}`}
            className="rounded h-80 lg:h-full"
          />
          <div className="text-center">
            <h1 className="md:text-5xl text-2xl hero-header w-96 text-center font-bold font-mono">
              {randomTitle}
            </h1>
            {isMobile ? (
              <p></p>
            ) : (
              <div className="w-72 m-auto mt-2">
                <div className="divider w-5/6 m-auto"></div>
                <p className="over-view">
                  {randomContent.length > maxCharacters
                    ? `${randomContent.substring(0, maxCharacters)}...`
                    : randomContent}
                </p>
                <div className="divider w-5/6 m-auto"></div>
              </div>
            )}
            <Link to={`/movies/${randomMovie?.id}`}>
              <button className="btn btn-primary mt-5">view more</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
