import Footer from "../components/Footer";
import Display from "../components/Display";
import Trending from "../components/Trending";
import Header from "../components/Header";
import NowPlaying from "../components/NowPlaying";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <Trending />
      <Display />
      <NowPlaying />
      <div className="divider w-5/6 m-auto"></div>
      <Banner />
      <div className="divider w-5/6 m-auto"></div>
      <Footer />
    </div>
  );
};
export default Home;
