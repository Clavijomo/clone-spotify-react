import {createContext, useState} from 'react'

const PlayContext = createContext();

const PlayProvider = ({children}) => {

  const [songPlay, setSongPlay] = useState({});  


  return(
    <PlayContext.Provider
      value={{
        setSongPlay,
        songPlay       
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