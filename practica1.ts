
function Hanoi(ndiscos:number,torreInicial:string,torreFinal:string, torreAux:string) {

    if(ndiscos === 1){
        console.log(`Se mueve un disco de ${torreInicial} a ${torreFinal}`);
    }
    else{
        Hanoi(ndiscos-1, torreInicial, torreAux, torreFinal);
        console.log(`Se mueve un disco de ${torreInicial} a ${torreFinal}`);
        Hanoi(ndiscos-1, torreAux, torreFinal, torreInicial);
    }
}

Hanoi(7,"torreA","torreB", "torreC")