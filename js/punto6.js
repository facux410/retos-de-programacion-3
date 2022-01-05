const list1 = []
const list2 = []

let indice1 = 1 ;
let indice2 =1 ;

while (indice1 <= 15 ) {
    const valornum = Number(prompt('ingrese un valor para la primera lista'))
    list1.push(valornum)
    indice1++


}


while (indice2 <= 15 ) {
    const valornum2 = Number(prompt('ingrese un valor para la segunda lista'))
    list2.push(valornum2)
    indice2++

}

const suma1 = list1.reduce((a,b)=> a+b)
const suma2 = list2.reduce((a,b)=> a+b)

if(suma1 === suma2){
    alert(`las listas son iguales`)
}
if(suma1 > suma2) {
    alert(`lista 1 es mayor a lista 2`)
}

if(suma2 > suma1){
    alert(`lista 2 es mayor a lista 1 `)
}