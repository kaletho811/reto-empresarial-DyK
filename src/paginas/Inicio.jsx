import React from "react";
import NoticiasDestacadas from "../componentes/inicio/NoticiasDestacadas";
import ContactoRapido from "../componentes/inicio/ContactoRapido";

const Inicio = () => {
  return (
    <div>
      <h1>Bienvenido a COONADOC</h1>
      <NoticiasDestacadas />
      <ContactoRapido />
    </div>
  );
};

export default Inicio;
