import "../index.css";
import logo from "../assets/clapperboard.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a href="/">
          <span className="sr-only">Shmovie Fanatics</span>
          <img className="h-8 w-auto ml-4" src={logo} alt="logo" />
        </a>
        <a className="btn btn-ghost normal-case md:text-xl lg:text-2xl beautiful-header">
          Shmovie Fanatics
        </a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-56 lg:w-96 mr-5"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
