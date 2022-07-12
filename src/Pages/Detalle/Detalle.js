import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CardDetalle from '../../components/CardDetalle/CardDetalle'
import { Context } from '../../Store/Store'
import './Detalle.css'

const Detalle = () => {
    const {films} = useContext(Context)
    const {id} = useParams()
   
    const result = films.filter((movie) => (movie.id==id))
  return (
    <div className='d-flex details justify-content-center mt-5'>
    {
        
        result.map(movie => (
          <CardDetalle key={movie.id} {...movie} />
        ))
        
    }
    </div>
  )
}

export default Detalle