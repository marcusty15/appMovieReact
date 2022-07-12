import React from 'react'
import './Titulo.css'
import img1 from '../../img/minions.jpg'
import img2 from '../../img/spiderman.jpg'
import img3 from '../../img/thor.jpg'

const Titulo = () => {
  return (
    <div className='contendor'>
      <h2 className=''>bienvenidos</h2>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img1} className="d-block w-100 img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className="d-block w-100 img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img3} className="d-block w-100 img" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
<h1  className='texto-encima'>BIENVENIDOS</h1>
<p className='texto-encima2'>Millones de peliculas y programas por descubrir</p>
</div>
  )
}

export default Titulo