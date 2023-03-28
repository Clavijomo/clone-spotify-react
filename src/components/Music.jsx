import React from 'react'

const Music = () => {

  return (
    <>
      <div className="mt-10 bg-zinc-800 p-2 rounded-xl flex items-center gap-3">        
        <div className="w-1/4">
          <img className="w-full rounded-lg shadow-2xl object-cover" src="https://i.scdn.co/image/ab67616d0000b2738e8753ff69b7efb6f8e146cd" alt=""/>
        </div>
        <div className="space-y-1">
          <h1>Feid</h1>
          <p className="text-xs text-zinc-400">2020</p>
        </div>
      </div>
    </>
  )
}

export default Music;