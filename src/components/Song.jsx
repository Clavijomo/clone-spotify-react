import {useState, useContext} from 'react'
import PlayContext from '../context/PlayContext'
import usePlaySong from '../hooks/usePlay'

const Song = ({item, index}) => {  
  const {artist, song, album, imageAlbum} = item;
  const {setSongPlay, songPlay} = usePlaySong();   

  console.log(songPlay);

  const handleAddSong = () => {
    console.log('Hola');
  }

  return (
    <>
      <div className="grid grid-cols-3 px-3 rounded-lg py-2 items-center hover:transition hover:bg-zinc-700">
        <div className="flex justify-items-start items-center gap-x-5 my-2">
          <img className="w-14" src={imageAlbum} alt=""/>
          <div>
            <p className="text-md text-zinc-200">{song}</p>          
            <h1 className="text-sm text-zinc-400 my-2">{artist}</h1>
          </div>
        </div>
        <div className="mx-auto">
          <p className="text-zinc-300">{album}</p>
        </div>
        <div className="mx-auto">
          <button onClick={handleAddSong} className="bg-blue-600 py-3 px-4 text-xs rounded-full">Reproducir</button>
        </div>
      </div>
    </>
  )
}

export default Song;