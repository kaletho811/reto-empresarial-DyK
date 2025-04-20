import React from "react";
import { Routes, Route } from "react-router-dom";
import Inicio from "../paginas/Inicio";
import QuienesSomos from "../paginas/QuienesSomos";
import AfiliacionServicios from "../paginas/AfiliacionServicios";
import DocumentosFormatos from "../paginas/DocumentosFormatos";
import NoticiasBlog from "../paginas/NoticiasBlog";
import ContactoSoporte from "../paginas/ContactoSoporte";
import NoEncontrado from "../paginas/NoEncontrado";

const RutasApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/afiliacion-servicios" element={<AfiliacionServicios />} />
      <Route path="/documentos-formatos" element={<DocumentosFormatos />} />
      <Route path="/noticias-blog" element={<NoticiasBlog />} />
      <Route path="/contacto-soporte" element={<ContactoSoporte />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};

export default RutasApp;
