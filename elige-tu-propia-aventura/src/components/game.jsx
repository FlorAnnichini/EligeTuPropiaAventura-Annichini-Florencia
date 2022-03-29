import React, { Component } from "react"
import { EleccionDeBoton } from './opciones'
import { Historia } from './historia'
import { Recordatorio } from './recordatorio'
import data from '../database/data.json'


class Game extends Component {

    state = {
        numeroIdHistoria: 1,
        opcionActualSeleccionada: "1",
        historiaActual: {
            historia: "",
            opciones: {
                "a": "",
                "b": ""
            }
        },
        ultimaOpcionSeleccionada: "",
        listadoDeHistorias: []
    };

    constructor(props) {
        super(props)

        this.seleccionBoton = this.seleccionBoton.bind(this);
    }

    actualizarHistoria() {
        let historias = data;

        let historiaElegida = historias.filter((historia) => {
            if (historia.id === this.state.opcionActualSeleccionada) {
                return historia;
            }
        });


        this.setState({
            historiaActual: historiaElegida[0]
        })
    }

    seleccionBoton(letra) {

        if (this.state.historiaActual.opciones.a === "FIN" || this.state.historiaActual.opciones.b === "FIN.") {
            alert("Muchas gracias por jugar!");

        } else {
            let paginaAuxiliar = this.state.numeroIdHistoria + 1;
            let opcionActual = `${paginaAuxiliar}${letra}`
            let historialOpcionesSeleccionadas = this.state.listadoDeHistorias;

            if (this.state.ultimaOpcionSeleccionada != "") {
                historialOpcionesSeleccionadas.push(this.state.ultimaOpcionSeleccionada);
            }

            this.setState({
                ultimaOpcionSeleccionada: letra,
                listadoDeHistorias: historialOpcionesSeleccionadas,
                numeroIdHistoria: paginaAuxiliar,
                opcionActualSeleccionada: opcionActual
            }, this.actualizarHistoria)
        }

    }

    componentDidMount() {
        this.actualizarHistoria()
    }

    render() {
        return (
            <div className='layout'>
                <Historia historia={this.state.historiaActual.historia} />
                <div className="opciones">
                    <EleccionDeBoton letra="a" textoOpcion={this.state.historiaActual.opciones.a} funcionClick={this.seleccionBoton} />
                    <EleccionDeBoton letra="b" textoOpcion={this.state.historiaActual.opciones.b} funcionClick={this.seleccionBoton} />
                </div>
                <Recordatorio ultimaOpcionSeleccionada={this.state.ultimaOpcionSeleccionada} historial={this.state.listadoDeHistorias} />
            </div>
        );
    }
}

export { Game };
