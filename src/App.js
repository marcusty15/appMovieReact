import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Store, { Context } from './Store/Store';

import Home from './Pages/Home/Home';
import Navbar from './components/navbar/Navbar';
import Titulo from './components/Titulo/Titulo';
import Peliculas from './Pages/peliculas/Peliculas';
import Favoritas from './Pages/Favoritas/Favoritas';
import { useContext } from 'react';

function App() {
  const {films, Fav} = useContext(Context)
  return (
    <Router>
      <Navbar/>
      <Titulo/>
      <Routes>
    <Route path='/fim' element={<Store/>}/> 
    <Route path='/' element={<Home/>} />
    <Route path='/peliculas'  element={<Peliculas/>} />
    <Route path='/favoritos' movie={Fav} element={<Favoritas/>} />
    </Routes>
    </Router>
  );
}

export default App;
