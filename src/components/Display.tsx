import { useContext } from "react";

// import "./display.css";
// make single card on mobile, add arrow button to see next movie for desktop and mobile.
// reuse component, add different buttons for movie types and set to change state

const Display = () => {
  //   const { movies } = useContext(stateContext);

  //   const randomIndex = Math.floor(Math.random() * movies.length);

  //   const randomMovie = movies[randomIndex];

  //   const randomtitle = randomMovie?.title || "";
  //   const randomContent = randomMovie?.overview || "";
  //   const backdropPath = randomMovie?.backdrop_path || "";

  return (
    <div className="display__container">
      <div className="hero w-5/6 h-full">
        <div className="hero-content flex-col lg:flex-row h-full">
          <img src="" className="max-w-sm rounded-lg shadow-2xl h-64" />
          <div>
            <h1 className="text-5xl font-bold"></h1>

            {/* <h2 className="font-bold">{randomtitle}</h2> */}
            <p className="py-6 over-view"></p>
            <button className="btn btn-primary">view more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Display;
