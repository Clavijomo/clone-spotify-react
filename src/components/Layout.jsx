import {Outlet, Link, useLocation} from 'react-router-dom'
import Home from '../icons/Home'
import Library from '../icons/Library'
import Search from '../icons/Search'
import FavoriteSong from './FavoriteSong'
import {faHeart} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Layout = () => {
  const location = useLocation();
  return (
    <div className="md:flex md:min-h-screen p-3 gap-2">          
      <aside className="md:w-1/6 flex-col flex gap-2">
        <div className="bg-neutral-900 p-3 rounded-xl">
          <ul className="space-y-5">
            <Link
              to="/"    
              className={`${location.pathname === '/' ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-white'} flex gap-2 p-3 transition rounded-lg`}
            >
              <Search />
              <p className="font-semibold tracking-wide">Inicio</p>
            </Link>
            <Link
              to="/search"
              className={`${location.pathname === '/search' ? 'bg-zinc-700 text-white' : 'text-zinc-400 hover:text-white'} flex gap-2 p-3 transition rounded-lg`}
            >
              <Home />
              <p className="font-semibold tracking-wide">Buscar</p>
            </Link>
          </ul>          
        </div>
        <div className="bg-neutral-900 py-5 px-3 rounded-xl h-full">
          <div className="flex gap-3 items-center px-1">       
            <FontAwesomeIcon icon={faHeart} />
            <p className="font-semibold text-zinc-400 tracking-wide">Tus favoritos</p>                        
          </div>
          <FavoriteSong />
        </div>
      </aside>      
      <main className="w-full">
        <Outlet />
      </main>      
    </div>
  )
}

export default Layout;