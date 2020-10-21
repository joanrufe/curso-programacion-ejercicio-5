import adjuntarManejador from "./adjuntarManejador";
import pintarEmpleados from "./pintarEmpleados";

/**
 * Pintar listado de empleados modificando empleadosContenedor.innerHTML
 * @param {import('./empleados').EmpleadosArray} empleados
 */
export default function iniciarApp(empleadosArray) {
  adjuntarManejador(empleadosArray);
  pintarEmpleados(empleadosArray);
}
