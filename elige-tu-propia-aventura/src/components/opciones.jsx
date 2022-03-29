import React from "react";

const EleccionDeBoton = (props) => {
    return (
        <div className="opcion">
            <button className="botones" onClick={() => props.funcionClick(props.letra)}>
                {props.letra.toUpperCase()}
            </button>
            <h2>{props.textoOpcion}</h2>
        </div>
    );
};

export {EleccionDeBoton};
