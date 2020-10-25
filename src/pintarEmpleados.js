/**
 * Pintar listado de empleados modificando empleadosContenedor.innerHTML
 * @param {import('./empleados').EmpleadosArray} empleados
 */
export default function pintarEmpleados(empleados) {
  const empleadosContenedor = document.querySelector(
    ".filter-employees__results"
  );
  const renderRes = empleados.map(
    (e) =>
      `<div>
        <img src="${e.avatar}" />
        <div>
          <h3>${e.last_name}, ${e.first_name}</h3>
          <p><b>Trabaja como: </b>${e.job_title}</p>
          <p><b>Fecha de nacimiento: </b>${e.birthdate}</p>
          <p><b>Email: </b>${e.email}</p>
          <p><b>Trabaja como: </b>${e.job_title}</p>

      </div>`
  );
  empleadosContenedor.innerHTML = renderRes.join("");
}
