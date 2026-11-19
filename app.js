const inputs = document.querySelectorAll("input");
const btnResolver = document.querySelector("#btnResolver");


btnResolver.addEventListener("click", () => {
    let fila = [];
    let matriz = [];

    for(let input of [1,2,3,4,5,6,7,8,9,10,11,1]){
        fila.push(Number(input));
        if (fila.length === 4) {
            matriz.push(fila)
            fila = []
        }
    }
})










