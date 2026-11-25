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


// Combina dos filas: numA * filaA - numB * filaB y devuelve la fila nueva
const combinarFilas = (numA, filaA, numB, filaB) => {
    const filaAMultiplicada = []
    const filaBMultiplicada = []

    for (let numero of filaA) {
        const operacion = numero * numA
        filaAMultiplicada.push(operacion)
    }

    for (let numero of filaB) {
        const operacion = numero * numB
        filaBMultiplicada.push(operacion)
    }

    const filaNueva = []

    // forEach para restar las multiplicaciones
    filaAMultiplicada.forEach((numero, indice) => {
        const nueva = numero - filaBMultiplicada[indice]
        filaNueva.push(nueva)
    })

    return filaNueva
}




// Fase 1,2 - Aqui hacemos como tal gauss (solo bajamos los ceros)
const bajarCeros = (matriz) => {
    // F2 Nueva
    matriz[1] = combinarFilas(matriz[0][0], matriz[1], matriz[1][0], matriz[0])

    // F3 Nueva
    matriz[2] = combinarFilas(matriz[0][0], matriz[2], matriz[2][0], matriz[0]) 

    // F3 nueva
    matriz[2] = combinarFilas(matriz[1][1], matriz[2], matriz[2][1], matriz[1])



    // como tal aqui inicia el metodo de gauss-jordan lo de arriba en si es solo gauss 
    //F2 nueva
    matriz[1] = combinarFilas(matriz[2][2], matriz[1], matriz[1][2], matriz[2])


    // F1 nueva
    matriz[0] = combinarFilas(matriz[2][2], matriz[0], matriz[0][2], matriz[2])

    // F1 nueva

    matriz[0] = combinarFilas(matriz[1][1], matriz[0], matriz[0][1], matriz[1])


    return matriz
}




btnResolver.addEventListener("click", () => {
    // console.log(leerMatriz(inputs));
    console.log(bajarCeros(leerMatriz(inputs)));
    
})

