import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Store/Store'


const Navbar = () => {
  const {search, setSearch, films, fav} = useContext(Context)

  const peliculasEncontradas =!search ? films : films.filter((personaje) => (personaje.original_title.toLowerCase().includes(search.toLowerCase())));
  return (
    <nav className="navbar navbar-expand-lg bg-light fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Logo</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active ms-5" aria-current="page" to="/">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/peliculas">Peliculas</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={e=>setSearch(e.target.value)}/>
        
      </form>
      <Link to='/favoritos'><span>❤️ {fav}</span></Link>
    </div>
  </div>
</nav>
  )
}

export default Navbar