import React, { useContext } from 'react'
import CardFilms from '../../components/CardFilms/CardFilms'
import { Context } from '../../Store/Store'
import { Link } from 'react-router-dom'

const Home = () => {
    const {films} = useContext(Context)
    const filmspopulares = films.filter(film => film.vote_average >= 7.5)

    console.log(films)
  return (
    <div className='container'>
        <h2 className='text-center mb-5 mt-5'>PELICULAS POPULARES</h2>
      
    <div className='d-flex flex-wrap justify-content-between mb-5'>
    {
        filmspopulares.length > 0 ?
        filmspopulares.map(movie => (
          <CardFilms key={movie.id} {...movie} />
        ))
      :
          <p>Cargando...</p>
    }
    </div>
    <div className='d-flex justify-content-center'>
    <Link to='/peliculas' className='mb-5 link'>Ver TODAS</Link>
    </div>
    </div>
    
  )
}

export default Home