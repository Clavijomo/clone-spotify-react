import {Outlet, Link, useLocation} from 'react-router-dom'
import Home from '../icons/Home'
import Library from '../icons/Library'
import Search from '../icons/Search'
import FavoriteSong from './FavoriteSong'

const Layout = () => {
  const location = useLocation();
  return (
    <div className="md:flex md:min-h-screen p-3 gap-2">          
      <aside className="md:w-1/6 flex-col flex gap-2">
        <div className="bg-neutral-900 p-3 rounded-xl">
          <ul className="space-y-5">
            <Link
              to="/"    
              className={`${location.pathname === '/' ? 'bg-zinc-700 text-white' : null} flex gap-2 p-2 transition rounded-lg`}
            >
              <Search />
              <p className="text-zinc-400 font-semibold">Inicio</p>
            </Link>
            <Link
              to="/search"
              className={`${location.pathname === '/search' ? 'bg-zinc-700' : null} flex gap-2 p-2 transition rounded-lg`}
            >
              <Home />
              <p className="text-zinc-400 font-semibold">Buscar</p>
            </Link>
          </ul>          
        </div>
        <div className="bg-neutral-900 py-5 px-3 rounded-xl h-full">
          <div className="flex gap-3">       
            <Library />     
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