const tabla = [];
let acumulador = 1;
const multiplicador  =8 ; 
finish = 500/8 

while ( acumulador <=finish) {
    const suma = acumulador * multiplicador
    acumulador++
    tabla.push(suma)
}

alert(`${tabla}`)