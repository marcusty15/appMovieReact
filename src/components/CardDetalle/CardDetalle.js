import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Store/Store'
import './CardDetalle.css'


const CardDetalle = (props) => {
    const {favAdd} = useContext(Context)
    const {original_title, vote_average, backdrop_path, movie, id, overview, release_date} = props
  return (
    <div className='container mt-5 formato border-radius shadow p-5 '>
        
        <div className='d-flex'>
            <img className='imag' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={original_title}/>
            <div className='container w-50 texto'>
                <h2 className='texto mt-2'>{original_title}</h2>
                <h2 className='texto2 '>{overview}</h2>
                <h2 className='texto2 '>calificacion: {vote_average}</h2>
                <h2 className='texto2 '> Release date: {release_date}</h2>
                <button className='icon me-5 shadow mt-2' onClick={() => favAdd(movie)}><span role='img' >  ❤️ </span></button>
                <Link className='btn shadow' to='/'>Volver</Link>
            </div>
        </div>
    </div>
  )
}

export default CardDetalle