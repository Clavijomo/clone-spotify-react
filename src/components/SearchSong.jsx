import {useEffect, useState} from 'react'
import usePlaySong from '../hooks/usePlay'
import PlaySong from './PlaySong'
import Song from './Song'

const SearchSong = () => {
  const [result, setResult] = useState([]);  
  const {songPlay} = usePlaySong();

  useEffect(() => {
    API();
  }, [])

  const API = async () => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const result = await response.json();
    setResult(result);
  }

  return (
    <div 
      className="bg-zinc-800 h-screen rounded-xl overflow-x-scroll relative">
      <div 
        className="bg-bg-artist bg-no-repeat bg-cover h-96 bg-fixed rounded-t-lg relative">
        <div className="bg-overlay w-full h-full absolute flex items-end p-8 rounded-t-lg">
          <h1 className="text-6xl font-semibold">Drake</h1>
        </div>
      </div>      
      <div className="flex flex-col py-10 px-8">  
        {result?.length && result.map((item, index) => {        
          return(          
            <Song 
              key={index}
              item={item} 

            />          
          )        
        })}      
      </div>

      {Object.keys(songPlay).length && <PlaySong/>}
    </div>
  )  
}

export default SearchSong;