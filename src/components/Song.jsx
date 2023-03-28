import {useState, useContext} from 'react'
import PlayContext from '../context/PlayContext'
import usePlaySong from '../hooks/usePlay'

const Song = ({item, index}) => {  
  const {username, id, company: {name}} = item;    

  const {setSongPlay, songPlay} = usePlaySong();   

  const handleSong = () => {    
    setSongPlay({
      name: item.name,
      song: item.address.city,
      image: 'https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526',
    })
  }  

  return (
    <>
      <div className="grid grid-cols-3 px-3 rounded-lg py-2 items-center hover:transition hover:bg-zinc-700">
        <div className="flex justify-items-start items-center gap-x-5 my-2">
          <p className="text-xs text-zinc-400">{id}</p>
          <img className="w-14 shadow-lg" src="https://i.scdn.co/image/ab67616d00001e02c5649add07ed3720be9d5526" alt=""/>
          <h1 className="text-md text-zinc-200 my-2">{username}</h1>
        </div>
        <div className="mx-auto">
          <p className="text-zinc-300">{name}</p>
        </div>
        <div className="mx-auto">
          <button onClick={handleSong} className="bg-blue-600 py-3 px-4 text-xs rounded-full">Reproducir</button>
        </div>
      </div>
    </>
  )
}

export default Song;