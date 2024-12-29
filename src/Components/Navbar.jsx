import React from 'react'

function Navbar({song}) {
  return (
    <div className='w-full px-20 py-4 flex justify-between items-cneter bg-zinc-100'>
        <h3 className='p-2 px-4'>Orange</h3>
        <div className='flex p-2 px-4 gap-1 bg-orange-500 text-zinc-100 rounded-md text-sm items-center'>
            <h3 className='font-semibold'>Favourites</h3>
            <h4 className='px-2 rounded-full bg-orange-600'>{song.filter(item=>item.added === true).length}</h4>
        </div>
    </div>
  )
}

export default Navbar