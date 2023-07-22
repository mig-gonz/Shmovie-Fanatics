import "../index.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center lg:text- p-4 text-base-content border-x-4 border-purple-950">
      <div className="text-center flex py-4">
        <p className="text-white">
          &copy; {new Date().getFullYear()} SHMOVIE FANATICS&nbsp; |
        </p>
        <p className="text-base-content text-white">
          This website utilizes movie data from the&nbsp;
          <a
            href="https://www.themoviedb.org/?language=en-US"
            className="beautiful-header"
          >
            TMDb API
          </a>
          &nbsp; |
        </p>
        <p className="text-white">
          Visit the
          <Link to="about" className="beautiful-header">
            &nbsp;About me&nbsp;
          </Link>
          section for more information about the developer
        </p>
      </div>
    </footer>
  );
};
export default Footer;
