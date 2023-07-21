import "../index.css";
import NowPlayingItems from "./NowPlayingItems";

const NowPlaying = () => {
  return (
    <div className="mb-8 mt-8">
      <div className="divider w-5/6 m-auto"></div>
      <div className="flex justify-center mb-6">
        <h1 className="beautiful-header text-2xl">Now Playing Movies:</h1>
      </div>
      <NowPlayingItems />
    </div>
  );
};
export default NowPlaying;
