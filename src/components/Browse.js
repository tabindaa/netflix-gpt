import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const moviesList = useNowPlayingMovies();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      <div className="relative">
        {moviesList?.length &&
          moviesList.map((movie) => {
            return movie.id;
          })}
      </div>

      {/* {
        MainCOntainer
          -VideoBackground
          -VideoTitle
        SecondaryContainer
          -MoviesList
          -Cards
      } */}
    </div>
  );
};

export default Browse;
