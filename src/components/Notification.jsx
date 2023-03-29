import React from 'react'

const Notification = ({children}) => {
  return (
    <div className="alert text-md shadow-2xl flex">      
      <p>{children}
        <span className="font-semibold"> Favoritos</span>
      </p>           
    </div>
  )
}

export default Notification;