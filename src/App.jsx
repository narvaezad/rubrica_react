import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Problema from "./pages/Problema";
import Errores from "./pages/Errores";
import Soluciones from "./pages/Soluciones";
import './App.css'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/problema" element={<Problema />} />
        <Route path="/errores" element={<Errores />} />
        <Route path="/soluciones" element={<Soluciones />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;