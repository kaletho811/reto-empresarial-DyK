import React from "react";
import Afiliacion from "../componentes/afiliacion-servicios/Afiliacion";
import Servicios from "../componentes/afiliacion-servicios/Servicios";
import Convenios from "../componentes/afiliacion-servicios/Convenios";
import Descargas from "../componentes/afiliacion-servicios/Descargas";

const AfiliacionServicios = () => {
    return (
        <div>
            <h1>Afiliación y Servicios</h1>
            <Afiliacion />
            <Servicios />
            <Convenios />
            <Descargas />
        </div>
    );
};

export default AfiliacionServicios;