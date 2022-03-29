import React from 'react'

const Recordatorio = (props) => {
    return (
        <div className='recordatorio'>
            <h3>Selección anterior: {props.ultimaOpcionSeleccionada.toUpperCase()}</h3>
            <h4>Historial de opciones elegidas:</h4>
            <ul>
                {
                    props.historial.map((letra, index) => {
                        return <li key={index}>{letra.toUpperCase()}</li>
                    })
                }
            </ul>
        </div>
    )
}

export {Recordatorio}