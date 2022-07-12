import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Navbar from "./components/navbar/Navbar";
import Peliculas from "./Pages/peliculas/Peliculas";
import Favoritas from "./Pages/Favoritas/Favoritas";
import Detalle from "./Pages/Detalle/Detalle";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/movie/:id" element={<Detalle />} />
        <Route path="/appMovieReact" element={<Home />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/favoritos" element={<Favoritas />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
