import Display from "../components/Display";
import Trending from "../components/Trending";
import Hero from "../components/Hero";
import NowPlaying from "../components/NowPlaying";
import SecondDisplay from "../components/SecondDisplay";

const Home = () => {
  return (
    <div className="border-x-4 border-purple-950">
      <Hero />
      <Trending />
      <h1 className="ml-12 mt-5 beautiful-header text-2xl font-mono">
        Discover:
      </h1>
      <Display />
      <NowPlaying />
      <div className="divider w-5/6 m-auto"></div>
      <h1 className="ml-12 mt-5 beautiful-header text-2xl font-mono">
        Discover:
      </h1>
      <SecondDisplay />
      <div className="divider w-5/6 m-auto"></div>
    </div>
  );
};
export default Home;
