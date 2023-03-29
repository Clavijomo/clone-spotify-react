import { useEffect, useState } from "react";
import usePlaySong from "../hooks/usePlay";

const FavoriteSong = () => {
  
  const {listSongs} = usePlaySong();  
  
  let arrayFav = []  

  listSongs.map(item => {
    if (item.favorite){
      arrayFav.push(item)      
    }
  }); 
  

  return (        
    <div>
      <div className="flex flex-col gap-3 mt-5">   
        {arrayFav.length ? arrayFav.map(item => (
          <div className="bg-zinc-700 rounded-lg shadow-xl p-3 flex gap-3 items-center" key={item.id}>          
            <div className="w-1/3">
              <img className="w-full rounded-lg" src={item.imageAlbum} alt=""/>    
            </div>
            <div className="flex flex-col gap-1 w-2/3">
              <h1 className="text-md">{item.song}</h1>
              <p className="text-sm text-zinc-400">{item.artist}</p>
            </div>
          </div>
          )) : (
            <div className="flex items-center h-96 justify-center">
              <h1 className="text-center text-zinc-600">Aún no tienes favoritos</h1>
            </div>
          ) 
        }
      </div>
    </div>
  )
}

export default FavoriteSong;