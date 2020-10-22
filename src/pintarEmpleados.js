/**
 * Pintar listado de empleados modificando empleadosContenedor.innerHTML
 * @param {import('./empleados').EmpleadosArray} empleados
 */
export default function pintarEmpleados(empleados) {
  const empleadosContenedor = document.querySelector(
    ".filter-employees__results"
  );
  const renderRes = empleados.map(
    (e) => `<div><img src="${e.avatar}" />${e.last_name}, ${e.first_name}</div>`
  );
  empleadosContenedor.innerHTML = renderRes.join("");
}
