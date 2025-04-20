import React from "react";
import { BrowserRouter } from "react-router-dom";
import RutasApp from "./rutas/RutasApp";
import "./estilos/globales.scss"; // o donde tengas los estilos

function App() {
  return (
    <BrowserRouter>
      <RutasApp />
    </BrowserRouter>
  );
}

export default App;
