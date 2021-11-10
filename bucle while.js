let CantidadTotal;
let salir = false;
let cantidadFinal = 0;
while(cantidadFinal == 0){
        cantidadTotal = parseInt(prompt("¿Cuántos dolares quiere ahorrar en total? "));
        salir = false
    while(salir == false){
        let ahorro = parseInt(prompt("¿Cuántos dolares quiere meter en el cochinito? "));
        cantidadFinal = ahorro + cantidadFinal;
        console.log(`Llevas ahorrado ${cantidadFinal}`)
        if(ahorro < 0){
            document.write("El Número Ingresado es negativo");
            ahorro = 0;
            cantidadFinal = 0;
            salir = true;
        }else{
            if(cantidadFinal >= cantidadTotal){
                document.write(`<br/> ¡Objetivo conseguido! Ha ahorrado usted ${cantidadFinal} dolares.`);
                salir = true;
        }
    }
}
}