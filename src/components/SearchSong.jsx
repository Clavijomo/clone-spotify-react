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
    <div className="bg-zinc-800 h-full rounded-xl overflow-x-scroll relative">      
      <div className="flex gap-5 p-10 items-end rounded-t-xl bg-gradient-to-t from-zinc-800 to-zinc-700">
        <img className="w-1/6 rounded-md shadow-2xl" src="https://is1-ssl.mzstatic.com/image/thumb/Video116/v4/33/10/f7/3310f7c0-9aee-b263-99be-97602c8be731/Job6466fa82-1e20-4f12-9c34-debd240ae4c4-146375042-PreviewImage_Preview_Image_Intermediate_nonvideo_272976479_1377247079-Time1678484014455.png/305x305cc.webp" alt=""/>
        <div className="space-y-3">
          <h1 className="text-7xl font-semibold">Mix global</h1>
          <p className="text-zinc-400">Lorem ipsum dolor sit amet consectetur</p>
          <p className="text-sm text-zinc-400">2023</p>
          <p className="text-xs">Actualizada: ahora</p>
        </div>
      </div>
      <div className="flex flex-col py-10 px-8"> 
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