import React, { useState } from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

function App() {

  const data =[
    {name: 'Mahiya ve', artist: 'Arijit Singh', added: false, image: 'https://images.unsplash.com/photo-1583604518057-6c31e12d4e30?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHNvbmdzfGVufDB8fDB8fHww'},
    {name: 'Ishq', artist: 'Rauhan Malik', added: false, image: 'https://plus.unsplash.com/premium_photo-1732042397208-dc316f2cbfa8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWNzfGVufDB8fDB8fHww'},
    {name: 'Millionare', artist: 'Honey Singh', added: false, image: 'https://images.unsplash.com/photo-1475275166152-f1e8005f9854?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG11c2ljc3xlbnwwfHwwfHx8MA%3D%3D'},
    {name: 'No Cap', artist: 'KR$NA', added: false, image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG11c2ljc3xlbnwwfHwwfHx8MA%3D%3D'},
  ]

  const [songData, setSongData] = useState(data);
  const handleClick = (songIndex) => (
    setSongData(prevState => {
      return prevState.map((song, index) => {
        if(index === songIndex){
          return {...song, added:!song.added}
        }
        return song;
      })
    })
  )

  return (
    <>
      <div className='w-full h-screen bg-zinc-200'>
        <Navbar song={songData} />
        <div className='px-12  flex gap-8 flex-wrap'>
          {songData.map((item, index)=>(
            <Card key={index} song={item} songIndex={index} handleClick={handleClick} />  // passing song data as prop to Card component
          ))}
        </div>
      </div>
    </>
  )
}

export default App