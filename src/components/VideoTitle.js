import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-20 absolute bg-gradient-to-r from-black">
        <h1 className="text-4xl text-white font-bold">{title}</h1>
        <p className='py-6 text-white text-lg w-2/6'>{overview}</p>
        <div className='flex gap-4'>
            <button className="bg-white text-black py-4 px-12  text-xl rounded-lg hover:bg-opacity-70">▶ Play</button>
            <button className="bg-gray-500 text-white py-4 px-12  text-xl bg-opacity-50 rounded-lg hover:bg-opacity-70">
                <span className='flex items-center gap-2'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" role="img" viewBox="0 0 24 24" width="24" height="24" data-icon="CircleIStandard" aria-hidden="true">
                        <path fill="currentColor" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM13 10V18H11V10H13ZM12 8.5C12.8284 8.5 13.5 7.82843 13.5 7C13.5 6.17157 12.8284 5.5 12 5.5C11.1716 5.5 10.5 6.17157 10.5 7C10.5 7.82843 11.1716 8.5 12 8.5Z" clip-rule="evenodd" fill-rule="evenodd"></path>
                    </svg> 
                    <span>More Info</span>
                </span>
            </button>
        </div>
    </div>
  )
}
 
export default VideoTitle