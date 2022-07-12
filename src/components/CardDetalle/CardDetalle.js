import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Store/Store'
import './CardDetalle.css'


const CardDetalle = (props) => {
    const {favAdd} = useContext(Context)
    const {original_title, vote_average, backdrop_path, movie, overview, release_date} = props
    let backdropImage = "https://image.tmdb.org/t/p/original" + backdrop_path
  return (
    
    <div className=' formato shadow p-5 ' style={{backgroundImage: `url(${backdropImage})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
        
        <div className='d-flex cardDetails'>
            <img className='imag ' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={original_title}/>
            <div className=' w-50 datos  shadow p-5 '>
                <h2 className='texto mt-2'>{original_title}</h2>
                <h2 className='texto2 '>{overview}</h2>
                <h2 className='texto2 '>calificacion: ⭐ {vote_average}</h2>
                <h2 className='texto2 '> Fecha de lanzamiento: {release_date}</h2>
                <button className='icon me-5 shadow mt-5' onClick={() => favAdd(movie)}><span role='img' >  ❤️  </span></button>
                <Link className='btn boton  shadow mb-3 ms-5 pt-2 pb-2' to='/appMovieReact'>Volver</Link>
            </div>
        </div>
    </div>
  )
}

export default CardDetalle