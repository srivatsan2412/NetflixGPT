import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title, movies}) => {
  console.log("movies ",movies);
  return (
    <div className='p-4'>
         <h1 className='text-3xl text-white py-4'>{title}</h1>
        <div className='flex overflow-auto'>
            <div className='flex gap-4'>
                {movies && movies.map((movie) => (
                    <MovieCard key={movie.id} imgPath={movie.poster_path}/>
                ))}
            </div>
        </div>
    </div>
  )
}

export default MovieList