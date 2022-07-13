import React, { useContext } from 'react'
import CardFilms from '../../components/CardFilms/CardFilms'
import { Context } from '../../Store/Store'
import './Peliculas.css'

const Peliculas = () => {
    const {peliculasEncontradas,peliculasEncontradas2, movieList, listadoPeliculas} = useContext(Context)

   
console.log(movieList)
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
    <div>
      
    </div>
    <div className='d-flex flex-wrap justify-content-around'>
    {
        peliculasEncontradas2.length > 0 ?
        peliculasEncontradas2.map(movie => (
          <CardFilms key={movie.id} {...movie} movie={movie} />
        ))
      : <p> </p>
      
    }
    </div >
    <div className='d-flex flex-wrap justify-content-around'>
    <button className='btn' onClick={listadoPeliculas}> ver mas</button>
    </div>
    </div>
  )
}

export default Peliculas