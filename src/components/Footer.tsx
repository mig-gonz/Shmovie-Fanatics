import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-200 text-base-content ">
      <div className="text-center py-4">
        <p className="text-white">
          &copy; {new Date().getFullYear()} SHMOVIE FANATICS {""}
        </p>
        <a
          href="https://github.com/mig-gonz"
          className="flex items-center text-white hover:text-gray-400 focus:text-gray-400"
        >
          <FaGithub className="mx-auto" size={25} />
        </a>
        <p>
          This website uses the{" "}
          <a href="https://www.themoviedb.org/?language=en-US">TMDb API</a> for
          movie data.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
