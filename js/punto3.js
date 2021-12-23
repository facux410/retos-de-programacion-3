const cantidadEmpleados = parseInt(prompt("ingrese la cantidad de empleados"));

let sueldosmenores = 0;
let sueldosmayores = 0;
let i = 0;
const sueldostotal = 0;

while (i < cantidadEmpleados) {
  const sueldos = Math.random(100, 500);
  if (sueldos >= 300) {
    sueldosmayores++;
  } else {
    sueldosmenores++;
  }
  i++;
}
console.log(sueldosmayores);
// alert(
//   `${sueldosmayores} personas cobran mas de 300 y ${sueldosmenores} cobran menos de 300`
// );
