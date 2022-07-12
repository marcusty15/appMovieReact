import React, { useContext } from 'react'
import CardFilms from '../../components/CardFilms/CardFilms'
import { Context } from '../../Store/Store'
import './Peliculas.css'

const Peliculas = () => {
    const {peliculasEncontradas} = useContext(Context)

   

  return (

    <div className='container ct '>
    <div className='d-flex flex-wrap justify-content-around'>
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