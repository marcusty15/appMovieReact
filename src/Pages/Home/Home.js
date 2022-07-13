import React, { useContext } from "react";
import CardFilms from "../../components/CardFilms/CardFilms";
import { Context } from "../../Store/Store";
import { Link } from "react-router-dom";
import Titulo from "../../components/Titulo/Titulo";
import "./Home.css";
import CardTop from "../../components/CardFilms/CardTop";

const Home = () => {
  const {peliculasEncontradas, peliculasEncontradas3} = useContext(Context);
  
  //variables creadas para filtrar las peliculas con mayor valoracion de votos
  const filmspopulares = peliculasEncontradas.filter((film) => film.vote_average >= 7.5);
  const filmspopulares2 = peliculasEncontradas3.filter((film) => film.vote_average >= 7.5);

  return (
    <div className="mt-5">
      <div className="pt-1">
        <Titulo />
      </div>
      <h2 className="text-center mb-5 mt-5 link">PELICULAS POPULARES</h2>
      <div className=" bg-dark info pt-5">
        <div className="container">
          <div className="d-flex flex-wrap justify-content-around mb-5">
            {filmspopulares.length > 0 ? (
              filmspopulares.map((movie) => (
                <CardFilms key={movie.id} {...movie} movie={movie} />
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </div>
        </div>
        <h2 className="text-center mb-5 mt-5 link2">PELICULAS TOP</h2>
        <div className="container">
          <div className="d-flex flex-wrap justify-content-around mb-5">
            {filmspopulares2.length > 0 ? (
              filmspopulares2.map((movie) => (
                <CardTop key={movie.id} {...movie} movie={movie} />
              ))
            ) : (
              <p>Cargando...</p>
            )}
          </div>

          <div className="d-flex justify-content-center">
            <Link to="/peliculas" className="mb-5 link boton btn ">
              VER TODAS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
