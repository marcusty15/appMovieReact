import React, { useContext } from 'react'
import CardFilms from '../../components/CardFilms/CardFilms'
import { Context } from '../../Store/Store'
import { Link } from 'react-router-dom'
import Titulo from '../../components/Titulo/Titulo'

const Home = () => {
    const {films, Fav} = useContext(Context)
    const filmspopulares = films.filter(film => film.vote_average >= 7.5)


  return (
    <div className='container mt-5'>
       <div className='pt-1'><Titulo/></div>
        
       
        <h2 className='text-center mb-1 mt-5'>PELICULAS POPULARES</h2>
      
    <div className='d-flex flex-wrap justify-content-between mb-5'>
    {
        filmspopulares.length > 0 ?
        filmspopulares.map(movie => (
          <CardFilms key={movie.id} {...movie} movie={movie}/>
        ))
      :
          <p>Cargando...</p>
    }
    </div>
    <div className='d-flex justify-content-center'>
    <Link to='/peliculas' className='mb-5 link btn btn-primary'>VER TODAS</Link>
    </div>
    </div>
    
  )
}

export default Home