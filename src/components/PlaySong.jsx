import {useState} from 'react'
import usePlaySong from '../hooks/usePlay'
import {faHeart, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Notification from './Notification'

const PlaySong = () => {

  const {songPlay, setSongPlay, listSongs, setListSongs} = usePlaySong();
  const {album, artist, imageAlbum, song, favorite, id} = songPlay;
  const [notification, setNotification] = useState('');

  const handleFavorite = () => {    
    let newListSong = [];
    listSongs.map(song => {
      if(song.id == id){
        if (song.favorite == true){
          song.favorite = false;
          setNotification('Eliminado de favoritos');
        } else {
          song.favorite = true;
          setNotification('Agregado a favoritos')
        }
      }
      setTimeout(() => {
        setNotification('');
      }, 2000);
      newListSong.push(song);
      }); 
    setListSongs(newListSong);     
  }

  const handleExit = () => {
    setSongPlay({})
  }

  return (
    <div className="fixed right-0 left-0 bottom-0 p-4 bg-zinc-900 grid grid-cols-3 items-center">
      <div className="flex items-center gap-3">        
        <div className="w-16">
          <img className="w-full" src={imageAlbum} alt=""/>
        </div>
        <div className="space-y-1">
          <h1 className="text-sm">{song}</h1>
          <p className="text-zinc-400 text-xs">{artist}</p>
        </div>  
        <div className="ml-7">
          <button className="flex" onClick={handleFavorite}>
            {favorite ? <FontAwesomeIcon icon={faHeart} style={{color: "#2b68e8"}}  /> : <FontAwesomeIcon icon={faHeart} />}
          </button>          
        </div>          
      </div>
      <div className="mx-auto">
        <h1>Logos</h1>
      </div>
      <div className="mx-auto">
        <button onClick={handleExit} className="p-2 hover:transition flex gap-3 items-center text-zinc-300"
        >
          {<FontAwesomeIcon icon={faArrowRight} />}
          Salir
        </button>
      </div> 
      {notification && <Notification>{notification}</Notification>} 
    </div>
  )
}

export default PlaySong;