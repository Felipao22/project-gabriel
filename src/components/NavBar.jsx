import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <div>
      <nav >
        <ul style={{display:'flex', justifyContent: 'center', listStyle:'none'}}>
          <li style={{marginRight:'20px'}}>
            <Link to="/">Home</Link>
          </li >
          <li style={{marginRight:'20px'}}>
            <Link to="/terapias">Terapias</Link>
          </li>
          <li style={{marginRight:'20px'}}>
            <Link to="/opiniones">Opiniones</Link>{" "}
          </li>
          <li style={{marginRight:'20px'}}>
            <Link to="/sobre-mi">Sobre Mí</Link>
          </li>
          <li style={{marginRight:'20px'}}>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li style={{marginRight:'20px'}}>
            <Link to="/reservar">Reservar</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
