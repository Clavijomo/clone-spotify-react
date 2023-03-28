import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Categories from './pages/Categories'
import Layout from './components/Layout'
import SearchSong from './components/SearchSong'
import { PlayProvider } from './context/PlayContext'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Categories />
      },
      {
        path: '/search',
        element: <SearchSong />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>  
    <PlayProvider>
      <RouterProvider 
        router={router}
      />
    </PlayProvider>  
  </React.StrictMode>,
)
