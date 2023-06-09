import "./App.css";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { Terapias } from "./components/Terapias";
import { Opiniones } from "./components/Opiniones";
import { SobreMi } from "./components/SobreMi";
import { Contacto } from "./components/Contacto";
import { Reservar } from "./components/Reservar";
import { ScrollToTop } from "./components/ScrollToTop";

function App() {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/terapias" element={<Terapias />}></Route>
        <Route exact path="/opiniones" element={<Opiniones />}></Route>
        <Route exact path="/sobre-mi" element={<SobreMi />}></Route>
        <Route exact path="/contacto" element={<Contacto />}></Route>
        <Route exact path="/reservar" element={<Reservar />}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
