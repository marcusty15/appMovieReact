import React, { useContext } from 'react'
import { Link} from 'react-router-dom'
import { Context } from '../../Store/Store'
import './CardFilms.css'
const CardFav = (props) => {
    
    
    const { borrarFilms} = useContext(Context)
    const {original_title, vote_average, backdrop_path, id} = props
    
  return (
    

    <div className="card mb-5 shadow mt-5 " style={{width: "14rem"}}>
        <div className="card-body cards">
        <Link className='link' to={`/movie/${id}`} ><img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} className="card-img-top im" alt={original_title} /></Link>
            <h5 className="card-title titulo mt-2 ">{original_title}</h5>
            <div className='d-flex contenedor'>
            <button  className='fav me-4' onClick={()=>(borrarFilms(id))}><span role='img' > 💔 </span></button>
            <p className="card-text mt-2 mb-1 ms-5 text">calificacion:⭐{vote_average}</p>
            </div>
        </div>
    </div>
  )
}

export default CardFav

