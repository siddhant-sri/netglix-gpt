import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePolularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  return (
    <>
      <div>
        <Header />
        <MainContainer />
        <SecondaryContainer />
        {/* 
          MainContainer
            - Video Background
            - Video Title
          SecondaryContainer
            - MovieList * n
            - cards * n 
        */}
      </div>
    </>
  );
};

export default Browse;
