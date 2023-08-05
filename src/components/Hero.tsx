import theater from "../assets/movies.jpg";
import "../index.css";

const Header = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${theater})`,
  };

  return (
    <div className="w-full h-[32rem]">
      <div
        className="hero h-full w-full rounded-2xl"
        style={backgroundImageStyle}
      >
        <div className="hero-overlay bg-opacity-60 rounded-2xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold hero-header font-mono">
              WELCOME TO SHMOVIE FANATICS
            </h1>
            <p className="mb-5 font-bold">
              Welcome to shmovie fanatics! Your one-stop movie destination.
              Discover the latest releases, explore genres, and indulge in your
              passion for all things movies. Whether you're a casual viewer or a
              dedicated cinephile, dive into the world of cinema with us!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
