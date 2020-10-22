import pintarEmpleados from "./pintarEmpleados";

/**
 * Filtrar empleadosArray y devolver el resultado con return
 *
 * @param {import('./empleados').EmpleadosArray} empleados
 * @param {string} filterValue
 */
export default function filtrarEmpleados(empleados, filterValue = "") {
  const filteredEmpl = empleados.filter(
    (e) =>
      e.first_name.includes(filterValue) || e.last_name.includes(filterValue)
  );
  pintarEmpleados(filteredEmpl);
}
