import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'



export const Context = createContext(null);
const UseProvider = ({children}) => {
  const [films, setFilms] = useState([])
  const [search, setSearch] = useState('')
  const [fav, setFav] = useState(0)
  const [favoritos, setFavoritos] = useState([])
  const peliculasEncontradas =!search ? films : films.filter((personaje) => (personaje.original_title.toLowerCase().includes(search.toLowerCase())));
  
  const obtenerPeliculas = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=0d68e9a4ac558ee3c69d4f057aeb8bd4&language=es"

    );
    setFilms(response.data.results);
  };
  
  const favAdd= (movie) => {
    let addfilms = favoritos.find(m => m.id === movie.id);
    
		if(addfilms){
      alert("pelicula  ya esta agregada")
      setFavoritos([...favoritos])

    } else{
      setFav(fav+1)
      setFavoritos([...favoritos, {...movie}])

      
    }
	};
  console.log(favoritos)
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