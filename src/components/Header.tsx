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
            <h1 className="mb-5 text-5xl font-bold hero-header">
              Welcome to Shmovie Fanatics
            </h1>
            <p className="mb-5 font-bold">
              Explore the world of movies with shmovie fanatics. Discover the
              latest releases, dive into your favorite genres, and stay
              up-to-date with the hottest trends in cinema. Join our community
              of movie enthusiasts and share your passion for films. Whether
              you're a casual viewer or a hardcore cinephile, shmovie fanatics
              is your ultimate destination for all things movies.
            </p>
            {/* <button className="btn btn-primary">Get Started</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
