import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  // Early return if movie is null or undefined
  if (movies === null) return; // OR if(!movies) return;

  const displayMovie = movies[0];
  //   console.log("displayMoviee", displayMovie);

  const { original_title, overview, id } = displayMovie;
  return (
    <div className="pt-[30%] bg-black md:pt-0">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
