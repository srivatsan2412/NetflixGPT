import React from 'react'
import GPTMovieSuggestion from './GPTMovieSuggestion';
import GPTSearchBar from './GPTSearchBar';
import { NETFLIX_BACKGROUND } from '../utils/constants';

const GptSearch = () => {
  return (
    <div>
         <div className="absolute -z-10">
          <img src={NETFLIX_BACKGROUND}
            alt="Netflix background Logo"
            className=' max-w'
          />  
        </div>
        <GPTSearchBar />
        <GPTMovieSuggestion />
    </div>
  )
}

export default GptSearch;