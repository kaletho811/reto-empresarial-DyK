import React from "react";
import MisionVision from "../componentes/quienes-somos/MisionVision";
import Historia from "../componentes/quienes-somos/Historia";
import DocumentosNormativos from "../componentes/quienes-somos/DocumentosNormativos";

const QuienesSomos = () => {
    return (
        <div>
            <h1>¿Quiénes Somos?</h1>
            <MisionVision />
            <Historia />
            <DocumentosNormativos />
        </div>
    );
};

export default QuienesSomos;