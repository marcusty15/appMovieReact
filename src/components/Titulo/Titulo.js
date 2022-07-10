import React from 'react'
import './Titulo.css'
import img1 from '../../img/minions.jpg'
import img2 from '../../img/spiderman.jpg'
import img3 from '../../img/thor.jpg'

const Titulo = () => {
  return (
    <div className='mt-5 ti'>
    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={img3} className="  img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img1} className="  img" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={img2} className=" img" alt="..."/>
    </div>
  </div>
</div>
</div>
  )
}

export default Titulo