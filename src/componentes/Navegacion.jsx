import React from "react";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/quienes-somos">¿Quiénes Somos?</Link></li>
        <li><Link to="/afiliacion-servicios">Afiliación y Servicios</Link></li>
        <li><Link to="/documentos-formatos">Documentos</Link></li>
        <li><Link to="/noticias-blog">Noticias</Link></li>
        <li><Link to="/contacto-soporte">Contacto</Link></li>
      </ul>
    </nav>
  );
};

export default Navegacion;
