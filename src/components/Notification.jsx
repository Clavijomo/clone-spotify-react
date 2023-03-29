import React from 'react'

const Notification = () => {
  return (
    <div className="absolute bottom-10 w-full z-10 flex justify-center">
      <div className="w-max bg-blue-500 text-white px-10 py-3 rounded-md ">
        <p>Agregado a favoritos</p>
      </div>
    </div>
  )
}

export default Notification;