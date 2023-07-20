import TrendingItems from "./TrendingItems";
import "../index.css";

const Trending = () => {
  return (
    <div>
      <div className="flex justify-center mt-6 mb-6">
        <h1 className="beautiful-header text-2xl">Trending Movies:</h1>
      </div>
      <TrendingItems />
    </div>
  );
};
export default Trending;
