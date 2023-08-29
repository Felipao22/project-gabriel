import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png"

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      name: "Inicio",
      link: "/",
      className:""
    },
    {
      id: 2,
      name: "terapias",
      link: "/terapias",
      className:""
    },
    {
      id: 3,
      name: "opiniones",
      link: "/opiniones",
      className:""
    },
    {
      id: 4,
      name: "sobre mí",
      link: "/sobre-mi",
      className:""
    },
    {
      id: 5,
      name: "contacto",
      link: "/contacto",
      className:""
    },
    {
      id: 6,
      name: "reservar",
      link: "/reservar",
      className:"rounded-full py-2 px-6 text-center bg-violet-800 hover:bg-violet-500"
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20  px-4 text-white bg-dark static shadow-2xl">
      <div className="flex items-center ">
        <a className="text-5xl font-signature ml-2" href="/">
          <img className="h-full w-16 md:ml-4 lg:ml-4 xl:ml-4" src={logo} alt="Logo Gabriel" />
        </a>
        {/* <h3 className="text-5xl font-signature ml-2">Gabriel Furik</h3> */}
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, link, name, className }) => (
          <li
            key={id}
            className={`${className} px-4 py-4 cursor-pointer capitalize font-medium text-white hover:scale-105 duration-200 `}
          >
            <Link to={link}>{name}</Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-dark text-white">
          {links.map(({ id, link, name }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
