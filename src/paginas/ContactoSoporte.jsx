import React from "react";
import FormularioContacto from "../componentes/contacto-soporte/FormularioContacto";
import PreguntasFrecuentes from "../componentes/contacto-soporte/PreguntasFrecuentes";

const ContactoSoporte = () => {
  return (
    <div>
      <h1>Contacto y Soporte</h1>
      <FormularioContacto />
      <PreguntasFrecuentes />
    </div>
  );
};

export default ContactoSoporte;
