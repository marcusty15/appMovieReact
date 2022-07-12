import React, { useContext } from "react";
import CardFav from "../../components/CardFilms/CardFav";
import './Favoritas.css'
import { Context } from "../../Store/Store";

const Favoritas = () => {
  const { favoritos} = useContext(Context);
  

  return (
    <>
    
    <div className="container d-flex justify-content-around flex-wrap mt-5">
      {favoritos.length > 0 ? (
        favoritos.map((movie) => (
          <CardFav
            key={movie.id}
            movie={movie}
            {...movie}
          />
        ))
      ) : (
        <p className="tx  ">No ha agregado una pelicula favorita</p>
      )}
      
    </div>
    </>
  );
};

export default Favoritas;
