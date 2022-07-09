import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Context } from '../../Store/Store'

const CardFav = (props) => {
    const {id} = useParams()
    
    const {Fav} = useContext(Context)
    const {original_title, vote_average, backdrop_path, movie} = props
  return (
    
    
    <div className="card mb-3 shadow" style={{width: "12rem"}}>
        <img src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} className="card-img-top" alt={original_title} />
        <div className="card-body cards">
            <h5 className="card-title">{original_title}</h5>
            <p className="card-text mb-1">{vote_average}</p>
            <button movie={movie} className='fav' onClick={()=>Fav(movie)}><span role='img' > ❤️ </span></button>
             <Link to={`/${id}`} className="btn btn-primary">mas info</Link>
        </div>
    </div>
  )
}

export default CardFav