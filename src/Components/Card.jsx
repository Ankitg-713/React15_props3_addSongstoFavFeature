import React from 'react'

function Card({song, songIndex, handleClick}) {

  const {name, artist, added, image} = song;

  return (
    <div className='w-60 p-4 bg-white rounded-md flex gap-3 items-center relative pb-8 mt-10'>
      <div className='w-20 h-20 bg-orange-500 rounded-md overflow-hidden'>
        <img className='w-full h-full object-cover' src={image} alt="" />
      </div>
      <div>
        <h3 className='text-xl font-semibold'>{name}</h3>
        <h3 className='text-xs'>{artist}</h3>
      </div>
      <button onClick={()=>handleClick(songIndex)} className={`px-4 py-2 ${added === false ? "bg-orange-500" : "bg-teal-500"} text-white text-xs rounded-full whitespace-nowrap absolute bottom-0 left-1/2 -translate-x-[50%] translate-y-[50%]`}>{added === false ? "Add to Favourites" : "Added"}</button>
    </div>
  )
}

export default Card