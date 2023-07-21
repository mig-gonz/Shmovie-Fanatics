import Display from "../components/Display";
import Trending from "../components/Trending";
import Header from "../components/Header";
import NowPlaying from "../components/NowPlaying";

// add fonts for all text
// change the name of the banner and add an about page, move banner there

const Home = () => {
  return (
    <div className="border-x-4 border-purple-950">
      <Header />
      <Trending />
      <Display />
      <NowPlaying />
      <div className="divider w-5/6 m-auto"></div>
    </div>
  );
};
export default Home;
