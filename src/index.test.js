import app from "./app";
import empleados from "./empleados";

function mockApp() {
  document.body.innerHTML = `<div class="filter-employees">
    <input placeholder="Buscar empleados/as..." name="keyword" />
    <div class="filter-employees__results"></div>
  </div>`;
  app(empleados);
  const searchInput = document.querySelector(".filter-employees input");
  const searchResults = searchInput.querySelector(".filter-employees__results");
  return {
    searchInput,
    searchResults
  };
}

test("Debe pintar el listado de empleados", () => {
  const { searchResults } = mockApp();
});

test("Al hacer click en > cambiarán las imagenes hasta volver al principio", () => {});

test("Al hacer click en < cambiarán las imagenes desde el final hasta el principio", () => {
  const { searchInput, searchResults } = mockApp();
});
// });
