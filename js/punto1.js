let i = 0;
let cantidadmayor = 0;
let cantidadmenor = 0;

while (i < 10) {
  const nota = parseInt(prompt("ingresaa las notas"));

  if (nota > 7) {
    cantidadmayor++;
  } else {
    cantidadmenor++;
  }

  i++;
}

alert(
  `la cantidad mayor es : ${cantidadmayor} y la cantidad menor es ${cantidadmenor}`
);
