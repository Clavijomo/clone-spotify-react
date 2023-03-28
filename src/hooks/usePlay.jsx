import {useContext} from 'react'
import PlayContext from '../context/PlayContext'

const usePlaySong = () => {
    return useContext(PlayContext);
}

export default usePlaySong;