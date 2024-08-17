import { generarId } from "./funciones.js";

// let editando = false // Al activar el type module toma la variable global como const
// Lo hacemos como en vue.js
let editando = {
    value: false
}

// Objeto de Cita
const citaObj = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}

export {
    editando,
    citaObj
}