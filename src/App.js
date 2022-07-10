import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';


import Home from './Pages/Home/Home';
import Navbar from './components/navbar/Navbar';
import Titulo from './components/Titulo/Titulo';
import Peliculas from './Pages/peliculas/Peliculas';
import Favoritas from './Pages/Favoritas/Favoritas';
import { useContext } from 'react';
import Detalle from './Pages/Detalle/Detalle';
import { Context } from './Store/Store';
import Footer from './components/Footer/Footer';

function App() {
  const {films, Fav} = useContext(Context)
  return (
    <Router>
      <Navbar/>
      <Routes>
    <Route path='/movie/:id' element={<Detalle/>}/> 
    <Route path='/' element={<Home/>} />
    <Route path='/peliculas'  element={<Peliculas/>} />
    <Route path='/favoritos' element={<Favoritas/>} />
    </Routes>
    <Footer/>
    </Router>
  );
}

export default App;
