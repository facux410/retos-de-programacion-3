let i = 1;
const cantidaddealturas = parseInt(
  prompt("ingrese cuantas alturas quiere ingresar")
);
let alturapromedio = 0;

while (i <= cantidaddealturas) {
  const alturas = parseInt(prompt("ingrese la altura"));
  alturapromedio = alturapromedio + alturas;
  i++;
}

alert(`la altura promedio es ${alturapromedio / cantidaddealturas}`);
