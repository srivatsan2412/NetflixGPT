import React from 'react'
import { TMDB_IMAGE_URL } from '../utils/constants'

const MovieCard = ({imgPath}) => {
  return (
    <div className="w-48 cursor-pointer">
        <img alt="movie poster" src={TMDB_IMAGE_URL + imgPath} />
    </div>
  )
}

export default MovieCard