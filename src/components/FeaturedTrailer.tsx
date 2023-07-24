import { useEffect, useState } from "react";

const FeaturedTrailer = () => {
  const [trailer, setTrailer] = useState("");
  const API_KEY = `api_key=55f130ea060d300d440fc9bf79c531c8`;

  useEffect(() => {
    const movieTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/385687/videos?${API_KEY}`
        );
        const data = response.json();
        console.log(data);
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
      movieTrailer();
    };
  }, []);

  const videoId = "Dn4y8t5SlgY";

  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="embed-responsive">
      <iframe
        title="Movie Trailer"
        width="560"
        height="315"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        className="m-auto"
      ></iframe>
    </div>
  );
};

export default FeaturedTrailer;
