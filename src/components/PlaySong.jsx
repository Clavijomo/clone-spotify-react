import usePlaySong from '../hooks/usePlay'
import Heart from '../icons/Heart'

const PlaySong = () => {
  const {songPlay, setSongPlay} = usePlaySong();
  const {favorite, setFavorite} = usePlaySong();
  
  const {name, song, image} = songPlay;


  return (
    <div className="fixed right-5 left-5 bottom-0 p-4 bg-black rounded-lg grid grid-cols-3 items-center">
      <div className="flex items-center gap-3">        
        <div className="w-16">
          <img className="w-full" src={image} alt=""/>
        </div>
        <div>
          <h1 className="text-md">{song}</h1>
          <p className="text-zinc-400 text-sm">{name}</p>
        </div>  
        <div className="ml-7">
          <button onClick={HandleFavorite} className="flex">
            <Heart />
          </button>          
        </div>          
      </div>
      <div className="mx-auto">
        <h1>Logos</h1>
      </div>
      <div className="mx-auto">
        <h1>Logos</h1>
      </div>
    </div>
  )
}

export default PlaySong;