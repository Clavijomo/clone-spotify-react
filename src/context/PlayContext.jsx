import {createContext, useState} from 'react'

const PlayContext = createContext();

const PlayProvider = ({children}) => {
  const [songPlay, setSongPlay] = useState({});  
  const [favorite, setFavorite] = useState({});
  const [listSongs, setListSongs] = useState([]);


  return(
    <PlayContext.Provider
      value={{
        setSongPlay,
        songPlay,        
        favorite,
        setFavorite,
        listSongs,
        setListSongs,
      }}
    >
      {children}
    </PlayContext.Provider>
  )
}

export {
  PlayProvider
}

export default PlayContext;