// referencias HTML
const inputs = document.querySelectorAll("input");
const btnResolver = document.querySelector("#btnResolver");
const resultadoX = document.querySelector("#resultadoX");
const resultadoY = document.querySelector("#resultadoY");
const resultadoZ = document.querySelector("#resultadoZ");




// Lee los 12 inputs y devuelve una matriz 3x4
const leerMatriz = (inputs) => {
    let fila = [];
    const matriz = [];

    for(let input of inputs){
        fila.push(Number(input.value));
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


// Fase 3 - Normalizar 
const dividirFila = (matriz ,pos, valorDivisible,) => {
    let resultados = []
    
    for(let valor of matriz[pos]){
        const operacion = valor / valorDivisible 
        resultados.push(operacion);
    }
    return resultados
}



const normalizar = (matriz) => {
    const f1 = dividirFila(matriz,0, matriz[0][0])  
    const f2 = dividirFila(matriz,1, matriz[1][1]) 
    const f3 = dividirFila(matriz,2, matriz[2][2])  
    return [f1[3], f2[3] , f3[3]] 
} 


const mostrarResultados = (numeros) => {
    resultadoX.textContent = numeros[0];
    resultadoY.textContent = numeros[1];
    resultadoZ.textContent = numeros[2];
    
}


btnResolver.addEventListener("click", () => {
    const valores = leerMatriz(inputs);
    const fasesUnoDos = bajarCeros(valores);
    const faseFinal = normalizar(fasesUnoDos);
    const mostrar = mostrarResultados(faseFinal)
    
})

