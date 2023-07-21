import TrendingItems from "./TrendingItems";
import "../index.css";

const Trending = () => {
  return (
    <div className="mt-10">
      <div className="flex justify-center mt-6 mb-6">
        <h1 className="beautiful-header text-2xl">Trending Movies:</h1>
      </div>
      <TrendingItems />
      <div className="divider w-5/6 m-auto mt-8"></div>
    </div>
  );
};
export default Trending;
