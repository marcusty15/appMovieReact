import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Store/Store'
import './Navbar.css'

const Navbar = () => {
  const { setSearch, fav} = useContext(Context)


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-3">
  <div className="container-fluid ">
    <Link className="navbar-brand logo" to="/appMovieReact">🎥</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active ms-5" aria-current="page" to="/appMovieReact">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/peliculas">Peliculas</Link>
        </li>
      </ul>
      <form className="d-flex me-5" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" onChange={e=>setSearch(e.target.value)}/>
        
      </form>
      <Link className='me-5 i' to='/favoritos'><span>❤️ {fav}</span></Link>
    </div>
  </div>
</nav>
  )
}

export default Navbar