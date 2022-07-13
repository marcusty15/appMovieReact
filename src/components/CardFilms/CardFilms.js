
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Store/Store'
import './CardFilms.css'

const CardFilms = (props) => {
   
    
    const {favAdd, favoritos} = useContext(Context)
    const {original_title, vote_average, backdrop_path, movie, id} = props
    const isfav = favoritos.some(favid=> favid.id===id)
    const [label, emoji] = isfav?['remove', '❤️']:['add', '🤍']

    return (
    <div className="card mb-3 shadow mt-2 " style={{width: "14rem"}}>
        <div className="card-body cards">
        <Link className='link' to={`/movie/${id}`} ><img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} className="card-img-top im" alt={original_title} /></Link>
            <h5 className="card-title titulo mt-2 ">{original_title}</h5>
            <div className='d-flex contenedor'>
            <button className='fav  me-5' onClick={() => favAdd(movie) }> <span aria-label={label} role='img'>{emoji}</span></button>
            <p className="card-text ms-3 mt-2 mb-1 text">calificacion: ⭐ {vote_average}</p>
            </div>
        </div>
    </div>
  )
}

export default CardFilms