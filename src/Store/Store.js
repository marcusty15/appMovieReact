import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';


export const Context = createContext(null);
const UseProvider = ({children}) => {
  const [films, setFilms] = useState([])
  const [search, setSearch] = useState('')
  const [fav, setFav] = useState([])
  
  const peliculasEncontradas =!search ? films : films.filter((personaje) => (personaje.original_title.toLowerCase().includes(search.toLowerCase())));
  
  const obtenerPeliculas = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=0d68e9a4ac558ee3c69d4f057aeb8bd4"

    );
    setFilms(response.data.results);
  };

  const Fav = (movie) => {
		const newFavouriteList = [...fav, movie];
		setFav(newFavouriteList);
	};
  console.log(Fav)

  useEffect(()=>{
    obtenerPeliculas()
  },[])

console.log(films)

  return (
    <Context.Provider
      value={{ films, setFilms, search, setSearch, peliculasEncontradas, fav, setFav, Fav}}
    >
      {children}
    </Context.Provider>
  )
}

export default UseProvider;