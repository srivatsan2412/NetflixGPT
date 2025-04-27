import React from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GPTSearchBar = () => {
  const langKey = useSelector(store => store.config.lang);
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='w-1/2 bg-black grid grid-cols-12'>
            <input type="text" placeholder={lang?.[langKey]?.gptSearchPlaceholder}className='m-4 p-4 rounded-md col-span-9 text-black' />
            <button type="submit" className='bg-blue-500 text-white py-2 px-4 m-4 rounded-md col-span-3 '>
                {lang?.[langKey]?.search}
            </button>
        </form>
    </div>
  )
}

export default GPTSearchBar