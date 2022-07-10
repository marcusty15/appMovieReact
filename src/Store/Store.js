import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Favoritas from '../Pages/Favoritas/Favoritas';


export const Context = createContext(null);
const UseProvider = ({children}) => {
  const [films, setFilms] = useState([])
  const [search, setSearch] = useState('')
  const [fav, setFav] = useState([])
  const [favoritos, setFavoritos] = useState([])
  const peliculasEncontradas =!search ? films : films.filter((personaje) => (personaje.original_title.toLowerCase().includes(search.toLowerCase())));
  
  const obtenerPeliculas = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=0d68e9a4ac558ee3c69d4f057aeb8bd4"

    );
    setFilms(response.data.results);
  };
  console.log(films)
  const favAdd= (movie) => {
    let addfilms = favoritos.find(m => m.id === movie.id);
    
		if(addfilms){
      alert("pelicula  ya esta agregada")
      setFavoritos([...favoritos])

    } else{
      setFavoritos([...favoritos, {...movie}])
      setFav(fav+1)
    }
	};
  
  const borrarFilms = (id) => {
    setFav(fav-1)
    return setFavoritos(favoritos.filter((m) => m.id !== id))
}


  useEffect(()=>{
    obtenerPeliculas()
  },[])

 


  return (
    <Context.Provider
      value={{ films, setFilms, search, setSearch, peliculasEncontradas, fav, setFav, favAdd, favoritos, setFavoritos, borrarFilms}}
    >
      {children}
    </Context.Provider>
  )
}

export default UseProvider;