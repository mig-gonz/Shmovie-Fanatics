import "../index.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1000);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobile = (
    <div className="text-center flex py-4">
      <p className="text-base-content text-white">
        Powered by&nbsp;
        <a
          href="https://www.themoviedb.org/?language=en-US"
          target="_blank"
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
      </p>
    </div>
  );

  const desktop = (
    <div className="text-center flex py-4">
      <p className="text-white">
        &copy; {new Date().getFullYear()} SHMOVIE FANATICS&nbsp; |
      </p>
      <p className="text-base-content text-white">
        This website is powered by&nbsp;
        <a
          href="https://www.themoviedb.org/?language=en-US"
          target="_blank"
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
  );

  return (
    <footer className="footer footer-center lg:text- p-4 text-base-content border-x-4 border-purple-950">
      {isMobile ? mobile : desktop}
    </footer>
  );
};
export default Footer;
