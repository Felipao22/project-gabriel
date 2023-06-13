import {FacebookLogo, InstagramLogo, LogoIcon, TwitterLogo, YoutubeLogo} from "./Icons";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


export const Footer = () => {
  return (
    <footer className="footer p-10 bg-dark text-base-content">
      <ScrollToTop />
      <div>
        <LogoIcon />
        <p className="text-white">
          Gabriel Furik
          <br />
          Terapeuta de Biodescodificación
        </p>
      </div>
      <div className="text-white">
        <span className="footer-title">navegar</span>
        <Link to="/" className="link link-hover" >Inicio</Link>
        <Link to="/terapias" className="link link-hover" >Terapias</Link>
        <Link to="/opiniones" className="link link-hover" >Opiniones</Link>
        <Link to="/sobre-mi" className="link link-hover" >Sobre Mí</Link>
        <Link to="/contacto" className="link link-hover" >Contacto</Link>
        <Link to="/reservar" className="link link-hover" >Reservar</Link>
      </div>
      <div className="text-white">
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </div>
      <div className="text-white">
    <span className="footer-title">Redes Sociales</span> 
    <div className="grid grid-flow-col gap-4 cursor-pointer">
      <a href="https://www.instagram.com/gabrielfurik/" target="_blank" rel="noreferrer" className="object-contain transition-all hover:scale-105"><InstagramLogo /></a>
      <a className="object-contain transition-all hover:scale-105"><YoutubeLogo /></a> 
      <a className="object-contain transition-all hover:scale-105"><FacebookLogo /></a>
    </div>
  </div>
  <div className="text-white flex flex-row">
  Copyright © 2023 - 
    <a href="https://www.linkedin.com/in/felipeaviani/" target="_blank" rel="noreferrer" className=" link text-white decoration-solid decoration-white">Felipe Aviani</a>
  </div>
    </footer>
  );
};
