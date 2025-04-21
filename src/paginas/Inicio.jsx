import React from "react";
import NoticiasDestacadas from "../componentes/inicio/NoticiasDestacadas";
import ContactoRapido from "../componentes/inicio/ContactoRapido";
import Navegacion from "../componentes/Navegacion";

const Inicio = () => {
  return (
    <><div className="parte-superior">
      <img src="../imagenes/logo.png" alt="logo COONADOC" className="logo" />
      <h1>Bienvenido a COONADOC</h1>
      <Navegacion />
    </div>
    <div>
      <NoticiasDestacadas />
      <ContactoRapido />
    </div></>
  );
};

export default Inicio;
