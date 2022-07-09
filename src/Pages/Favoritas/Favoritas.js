import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import CardFav from '../../components/CardFilms/CardFav'

import { Context } from '../../Store/Store'

const Favoritas = () => {
    const {Fav, films }= useContext(Context)
    const {id} = useParams()
    
  return (
    <div className='container d-flex justify-content-between flex-wrap '>
        {
        films.length > 0 ?
        films.map(movie => (
          <CardFav key={movie.id} {...movie} movie={movie}/>
        ))
      :
          <p>Cargando...</p>
    }
    </div>
  )
}

export default Favoritas