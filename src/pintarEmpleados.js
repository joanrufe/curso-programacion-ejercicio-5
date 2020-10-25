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
        <img style="max-width:100px;" src="${e.avatar}" />
        <div>
          <h3>${e.last_name}, ${e.first_name}</h3>
          <p><b>Trabaja como: </b>${e.job_title}</p>
          <p><b>Fecha de nacimiento: </b>${e.birthdate}</p>
          <p><b>Email: </b><a href="${e.email}">${e.email}</a></p>
        </div>
      </div>`
  );
  empleadosContenedor.innerHTML = renderRes.join("");
}
