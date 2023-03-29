import {useEffect, useState} from 'react'
import dataSongs from '../data'
import usePlaySong from '../hooks/usePlay'
import PlaySong from './PlaySong'
import Song from './Song'

const SearchSong = () => {
  const {songPlay, listSongs, setListSongs} = usePlaySong();  
  
  useEffect(() => {
    Songs();
  }, [])

  const Songs = () => {
    setListSongs(dataSongs);
  }

  return (
    <div className="bg-zinc-800 h-screen rounded-xl overflow-x-scroll relative">
      <div className="bg-bg-artist bg-no-repeat bg-cover h-96 bg-fixed rounded-t-lg relative">
        <div className="bg-overlay w-full h-full absolute flex items-end p-8 rounded-t-lg">
          <h1 className="text-6xl font-semibold">Drake</h1>
        </div>
      </div>      
      <div className="flex flex-col py-10 px-8"> 
      <h1 className="text-2xl mb-5 font-semibold">Populares</h1> 
        {listSongs?.length && listSongs.map((item, index) => {        
          return(                      
            <Song 
              key={index}
              cancion={item} 
            />          
          )        
        })}      
      </div>      
      {Object.keys(songPlay).length ? <PlaySong/> : null}
    </div>
  )  
}

export default SearchSong;