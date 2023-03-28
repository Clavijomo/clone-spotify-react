
const FavoriteSong = () => {
  
  return (    
    <div className="bg-zinc-800 my-5 p-3 flex items-center gap-3">
      <div className="w-1/4">
        <img src="" alt=""/>
      </div>
      <div className="space-y-2">
        <h1 className="text-sm">{name}</h1>      
        <p className="text-xs">{song}</p>
      </div>
    </div>
  )
}

export default FavoriteSong;