import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const nowPlayingMovies = useSelector((store) => store.movies?.nowPlayingMovies); 
  const popularMovies = useSelector((store) => store.movies?.popularMovies); 
  const topRatedMovies = useSelector((store) => store.movies?.topRatedMovies);  
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);

  return (
    <div className='bg-black'>
        <div className="-mt-52 pl-16 relative z-10">
            {nowPlayingMovies && <MovieList title={"Now Playing"} movies={nowPlayingMovies}/>}
            {popularMovies &&<MovieList title={"Trending"} movies={popularMovies}/> }
            {topRatedMovies && <MovieList title={"Top Rated"} movies={topRatedMovies}/>}
            {upcomingMovies && <MovieList title={"Upcoming"} movies={upcomingMovies}/>}
            { /* 
                    MovieList - popular movies
                        - cards * n
                    MovieList - Now playing
                    MovieList - Top rated
                    MovieList - Upcoming
                */  
                }
        </div>
    </div>
  )
}

export default SecondaryContainer