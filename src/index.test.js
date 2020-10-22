import { fireEvent, getByText } from "@testing-library/dom";
import app from "./app";
import empleados from "./empleados";

function mockApp() {
  document.body.innerHTML = `<div class="filter-employees">
    <input placeholder="Buscar empleados/as..." name="keyword" />
    <div class="filter-employees__results"></div>
  </div>`;
  app(empleados);
  const searchInput = document.querySelector(".filter-employees input");
  const searchResults = document.querySelector(".filter-employees__results");
  return {
    searchInput,
    searchResults
  };
}

describe("Pintar empleados", () => {
  test("Debe pintar el nombre de cada empleado", () => {
    const { searchResults } = mockApp();
    empleados.forEach((e) => {
      expect(getByText(searchResults, e.first_name)).not.toBeNull();
    });
  });

  test("Debe pintar el apellido de cada empleado", () => {
    const { searchResults } = mockApp();
    empleados.forEach((e) => {
      expect(getByText(searchResults, e.last_name)).not.toBeNull();
    });
  });
  test("Debe pintar en que trabaja cada empleado", () => {
    const { searchResults } = mockApp();
    empleados.forEach((e) => {
      expect(getByText(searchResults, e.last_name)).not.toBeNull();
    });
  });
  test("Debe pintar el avatar en un <img>", () => {
    const { searchResults } = mockApp();
    empleados.forEach((e) => {
      const res = searchResults.querySelector(`img[src="${e.avatar}"]`);
      expect(res).not.toBeNull();
    });
  });
});

describe("Filtrar empleados", () => {
  test("Debe filtrar por nombre", () => {
    const { searchResults, searchInput } = mockApp();
    const searchValue = empleados[1].first_name;
    fireEvent.input(searchInput, { target: { value: searchValue } });
    empleados.forEach((e) => {
      if (e.first_name.includes(searchValue)) {
        expect(searchResults.innerHTML).toContain(e.first_name);
      } else {
        expect(searchResults.innerHTML).not.toContain(e.first_name);
      }
    });
  });

  test("Debe filtrar por apellido", () => {
    const { searchResults, searchInput } = mockApp();
    const searchValue = empleados[1].last_name;
    fireEvent.input(searchInput, { target: { value: searchValue } });
    empleados.forEach((e) => {
      if (e.last_name.includes(searchValue)) {
        expect(searchResults.innerHTML).toContain(e.last_name);
      } else {
        expect(searchResults.innerHTML).not.toContain(e.last_name);
      }
    });
  });
});
