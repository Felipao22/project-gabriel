import {FacebookLogo, LogoIcon, TwitterLogo, YoutubeLogo} from "./Icons";
export const Footer = () => {
  const BASE_URL = import.meta.env.PROD ? 'https://project-gabriel.vercel.app/' : 'http://localhost:5173/'
  return (
    <footer className="footer p-10 bg-dark text-base-content">
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
        <a className="link link-hover" href={`${BASE_URL}`}>Inicio</a>
        <a className="link link-hover" href={`${BASE_URL}terapias`}>Terapias</a>
        <a className="link link-hover" href={`${BASE_URL}opiniones`}>Opiniones</a>
        <a className="link link-hover" href={`${BASE_URL}sobre-mi`}>Sobre Mí</a>
        <a className="link link-hover" href={`${BASE_URL}contacto`}>Contacto</a>
        <a className="link link-hover" href={`${BASE_URL}reservar`}>Reservar</a>
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
    <div className="grid grid-flow-col gap-4">
      <a><TwitterLogo /></a>
      <a><YoutubeLogo /></a> 
      <a><FacebookLogo /></a>
    </div>
  </div>
  <div className="text-white flex flex-row">
  Copyright © 2023 - 
    <a href="https://www.linkedin.com/in/felipeaviani/" target="_blank" rel="noreferrer" className=" link text-white decoration-solid decoration-white">Felipe Aviani</a>
  </div>
    </footer>
  );
};
