import {useState} from 'react'
import usePlaySong from '../hooks/usePlay'
import {faHeart, faComment} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Notification from './Notification'

const Song = ({cancion, index}) => {  
  const {artist, song, album, imageAlbum, favorite, id} = cancion;
  const {setSongPlay, setListSongs, listSongs} = usePlaySong();   
  const [notification, setNotification] = useState(false);

  const handleAddSong = () => {
    setSongPlay(cancion)                  
  }

  const handleFavorite = () => {    
    
    let newListSong = []    

    listSongs.map(song => {
      if(song.id == cancion.id){
        if (song.favorite == true){
        song.favorite = false
        }else {
        song.favorite = true
        }
      }
       newListSong.push(song);
      }); 
    setListSongs(newListSong); 

    setTimeout(() => {
      setNotification(true);      
      setTimeout(() => {
        setNotification(false);
      }, 2000);
    }, 100);    
  }

  return (
    <>      
      <div className="grid grid-cols-4 px-3 rounded-md py-1 items-center hover:transition hover:bg-zinc-700 relative">        
        <div className="flex justify-items-start items-center gap-x-5 my-2">
          <div>
            <p className="text-sm text-zinc-400">{id}</p>
          </div>
          <img className="w-14" src={imageAlbum} alt=""/>
          <div>
            <p className="text-md text-white">{song}</p>          
            <h1 className="text-sm text-zinc-400 my-2">{artist}</h1>
          </div>
        </div>
        <div className="mx-auto">
          <p className="text-zinc-300">{album}</p>
        </div>
        <div className="mx-auto">
          <button onClick={handleFavorite}>
            {favorite ? <FontAwesomeIcon icon={faHeart} style={{color: "#2b68e8"}} /> : <FontAwesomeIcon icon={faHeart} />}
          </button>
        </div>
        <div className="mx-auto">
          <button onClick={handleAddSong} className="bg-blue-600 py-3 px-4 text-xs rounded-full">Reproducir</button>
        </div>          
      </div>
      {notification && <Notification/>}      
    </>
  )
}

export default Song;