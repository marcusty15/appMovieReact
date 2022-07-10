import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import CardFav from "../../components/CardFilms/CardFav";
import './Favoritas.css'
import { Context } from "../../Store/Store";

const Favoritas = () => {
  const { favoritos, borrarFilms } = useContext(Context);
  const { id } = useParams();

  return (
    <>
    
    <div className="container d-flex justify-content-between flex-wrap mt-5">
      {favoritos.length > 0 ? (
        favoritos.map((movie) => (
          <CardFav
            key={movie.id}
            movie={movie}
            {...movie}
          />
        ))
      ) : (
        <p className="tx mt-5">No ha agregado una pelicula favorita</p>
      )}
      
    </div>
    </>
  );
};

export default Favoritas;
