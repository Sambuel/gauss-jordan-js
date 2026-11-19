// referencias HTML
const inputs = document.querySelectorAll("input");
const btnResolver = document.querySelector("#btnResolver");



// funcion que lee los inputs que un for itera para que se haga un push en el array matriz
const leerMatriz = (inputs) => {
    let fila = [];
    let matriz = [];

    for(let input of  inputs){
        fila.push(Number(input.value));
        if (fila.length === 4) {
            matriz.push(fila)
            fila = []
        }
    }
    return matriz
}


btnResolver.addEventListener("click", () => {
    console.log(leerMatriz(inputs));
})










