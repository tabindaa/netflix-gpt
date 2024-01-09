import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTrendingMovies from "../hooks/useTrendingMovies";
import useTopRatedTVSeries from "../hooks/useTopRatedTVSeries";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTrendingMovies();
  useTopRatedTVSeries();

  return (
    <div>
      {/* {
        MainCOntainer
          -VideoBackground
          -VideoTitle
        SecondaryContainer
          -MoviesList
          -Cards
      } */}
      <Header />
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
