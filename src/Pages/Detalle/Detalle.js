import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CardDetalle from '../../components/CardDetalle/CardDetalle'
import CardDetalle2 from '../../components/CardDetalle/CardDetalle2'
import { Context } from '../../Store/Store'
import './Detalle.css'

const Detalle = () => {
    const {films, movieList, moviesTop} = useContext(Context)
    const {id} = useParams()

    const result = films.filter((movie) => (movie.id==id))
    const result2 = movieList.filter((movie) => (movie.id==id))
    const result3 = moviesTop.filter((movie) => (movie.id==id))
  return (
    <div>
    <div className='d-flex details justify-content-center mt-5'>
    {
        result.length > 0 ?(
        result.map(movie => (
          <CardDetalle key={movie.id} {...movie} />
        ))
        )
        :
        result2.length > 0 ?(result2.map((movie, index) => (
          <CardDetalle2 key={movie.id} {...movie} />
      ))):(result3.map((movie, index) => (
      
        <CardDetalle2 key={movie.id} {...movie} />
        
    )))
    }
    
    </div>
  

    </div>
    
  )
}

export default Detalle