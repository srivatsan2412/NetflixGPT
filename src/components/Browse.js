import { useSelector } from 'react-redux';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import usePopularMovies from '../hooks/usPopularMovies';
import GptSearch from './GptSearch';
import Header from './Header'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  const showGPTSearch = useSelector(store => store.gpt.showGPTSearch);

  return (
    <div>
      <Header />
      {showGPTSearch ? 
        <GptSearch /> : <>
          <MainContainer />
          <SecondaryContainer />
        </>
      }
      {
        /*
          MainContainer
            - VideoBackground
            - VideoTitle
          SecondaryContainer
            - MovieList * n rows
              - cards * n
                - MovieCard
        */
      }
    </div>
  )
}

export default Browse