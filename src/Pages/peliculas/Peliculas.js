import React, { useContext } from 'react'
import CardFilms from '../../components/CardFilms/CardFilms'
import { Context } from '../../Store/Store'
import './Peliculas.css'

const Peliculas = () => {
    const {films, peliculasEncontradas, Fav} = useContext(Context)

   

  return (

    <div className='container mt-5'>
    <div className='d-flex flex-wrap justify-content-between mt-5'>
    {
        peliculasEncontradas.length > 0 ?
        peliculasEncontradas.map(movie => (
          <CardFilms key={movie.id} {...movie} movie={movie} />
        ))
      :
          <p>Cargando...</p>
    }
    </div>
    </div>
  )
}

export default Peliculas