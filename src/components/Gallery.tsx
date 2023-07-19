import GalleryItem from "./GalleryItem";
import "../index.css";

const Gallery = () => {
  return (
    <div>
      <div className="flex justify-center mt-6 mb-6">
        <h1 className="beautiful-header text-2xl">Trending Movies:</h1>
      </div>
      <GalleryItem />
    </div>
  );
};
export default Gallery;
