import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'




export const Context = createContext(null);
const UseProvider = ({children}) => {
  const [films, setFilms] = useState([])
  const [search, setSearch] = useState('')
  const [moviesTop, setMoviesTop] = useState([])
  const [movieList, setMovieList] = useState([])
  const [fav, setFav] = useState(0)
  const [count, setCount] = useState(1)
  const [favoritos, setFavoritos] = useState([])

  //variables creada para filtrar por medio de una busqueda en el navbar
  const peliculasEncontradas =!search ? films : films.filter((personaje) => (personaje.original_title.toLowerCase().includes(search.toLowerCase())));
  const peliculasEncontradas2 = !search ? movieList : movieList.filter((personaje) => (personaje.original_title.toLowerCase().includes(search.toLowerCase())))
  const peliculasEncontradas3 = !search ? moviesTop : moviesTop.filter((personaje) => (personaje.original_title.toLowerCase().includes(search.toLowerCase())))


  // se obtiene la informacion por medio de 3 diferentes api
  const obtenerPeliculas = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=0d68e9a4ac558ee3c69d4f057aeb8bd4&language=es"

    );
    setFilms(response.data.results);
  };

    const obtenerPeliculasTop = async () =>{
      const movietop = await axios.get(
        "https://api.themoviedb.org/3/movie/top_rated?api_key=0d68e9a4ac558ee3c69d4f057aeb8bd4&language=es"
      )
      setMoviesTop(movietop.data.results)
    }

    const listadoPeliculas = async () =>{
      setCount(count+1)
      const listmovie = await axios.get(
        `https://api.themoviedb.org/3/list/${count}?api_key=0d68e9a4ac558ee3c69d4f057aeb8bd4&language=es`
      )
      
      setMovieList([...movieList, ...listmovie.data.items])
      
    }
    
    // funcion para agregar peliculas a favoritos
  const favAdd= (movie) => {
    let addfilms = favoritos.find(m => m.id === movie.id);
    
		if(addfilms){
      alert("Pelicula ya esta agregada")
      setFavoritos([...favoritos])

    } else{
      setFav(fav+1)
      setFavoritos([...favoritos, {...movie}])

      
    }
	};
  
  //Funcion para Borrar peliculas en favoritos
  const borrarFilms = (id) => {
    setFav(fav-1)
    return setFavoritos(favoritos.filter((m) => m.id !== id))
}


  useEffect(()=>{
    obtenerPeliculas()
    obtenerPeliculasTop()
    
  },[])

 


  return (
    <Context.Provider
      value={{ films, setFilms, search, setSearch, peliculasEncontradas, peliculasEncontradas3, fav, setFav, favAdd, favoritos, setFavoritos, borrarFilms, moviesTop, movieList, listadoPeliculas, peliculasEncontradas2}}
    >
      {children}
    </Context.Provider>
  )
}

export default UseProvider;