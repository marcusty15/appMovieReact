import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Store/Store'
import img from '../../img/pngwing.com.png'
import './Navbar.css'

const Navbar = () => {
  const { setSearch, fav} = useContext(Context)


  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top p-3">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/appMovieReact"><img className='logo' src={img} alt='logo'></img></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active ms-5" aria-current="page" to="/appMovieReact">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active ms-5" to="/peliculas">Peliculas</Link>
        </li>
      </ul>
      <form className="d-flex me-4 w-25" role="search">
        <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" onChange={e=>setSearch(e.target.value)}/>
      </form>
      <Link className='mx-3 i' to='/favoritos'><span className='ms-2'>❤️ {fav}</span></Link>
    </div>
  </div>
</nav>
  )
}

export default Navbar