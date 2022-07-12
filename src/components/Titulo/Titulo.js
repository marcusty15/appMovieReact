import React from 'react'
import './Titulo.css'
import img1 from '../../img/minions.jpg'
import img2 from '../../img/spiderman.jpg'
import img3 from '../../img/thor.jpg'

const Titulo = () => {
  return (
    <div id="carouselExampleControls " className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner mt-4">
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
  )
}

export default Titulo