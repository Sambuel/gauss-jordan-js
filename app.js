// referencias HTML
const inputs = document.querySelectorAll("input");
const btnResolver = document.querySelector("#btnResolver");



// Lee los 12 inputs y devuelve una matriz 3x4
const leerMatriz = (inputs) => {
    let fila = [];
    const matriz = [];

    for(let input of [1,2,3,24,2,1,1,16,3,1,2,24]){
        fila.push(Number(input));
        if (fila.length === 4) {
            matriz.push(fila)
            fila = []
        }
    }
    return matriz
}

// Fase 1 - Aqui hacemos como tal gauss (solo bajamos los ceros)
const bajarCeros = (matriz) => {
    // F2 Nueva
    const pivoteFilaUno = matriz[0][0] // pivotes
    const factor = matriz[1][0]

    const filaDosPorPivote = []
    const filaUnoPorFactor = []

    for( let filaDos of matriz[1]){
        const operacion = filaDos * pivoteFilaUno
        filaDosPorPivote.push(operacion)
    }

    for( let filaUno of matriz[0]){
        const operacion = filaUno * factor
        filaUnoPorFactor.push(operacion)
    }

    let nuevaFilaDos = []

    filaDosPorPivote.forEach((numero,indice) => {
        const nueva = numero - filaUnoPorFactor[indice]
        nuevaFilaDos.push(nueva);
    })

    console.log(filaDosPorPivote);
    console.log(filaUnoPorFactor);

    console.log(nuevaFilaDos);    
}


btnResolver.addEventListener("click", () => {
    // console.log(leerMatriz(inputs));
    bajarCeros(leerMatriz(inputs))
})

