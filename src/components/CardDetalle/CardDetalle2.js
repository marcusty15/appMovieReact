import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../Store/Store'

const CardDetalle2 = (props) => {
    const {favAdd} = useContext(Context)
    const {original_title, vote_average, backdrop_path, movie, overview, release_date, id} = props
    console.log(movie)
    let backdropImage = "https://image.tmdb.org/t/p/original" + backdrop_path
  return (
    
    <div className=' formato shadow p-5 ' style={{backgroundImage: `url(${backdropImage})`, backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
        
        <div className='d-flex cardDetails' key={id}>
            <img className='imag ' src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`} alt={original_title}/>
            <div className='  datos  shadow p-5 '>
                <h2 className='texto mt-2'>{original_title}</h2>
                <h2 className='texto2 '>{overview}</h2>
                <h2 className='texto2 '>calificacion: ⭐ {vote_average}</h2>
                <h2 className='texto2 '> Fecha de lanzamiento: {release_date}</h2>
                <button className='icon shadow' onClick={() => favAdd(movie)}><span role='img' >  ❤️  </span></button>
                <Link className='btn boton  shadow ' to='/appMovieReact'>Volver</Link>
                
            </div>
        </div>
    </div>
  )
}

export default CardDetalle2