let S: number = 0;
let numerador: number = 1;
for(numerador; numerador <= 10; numerador++){
    let denominador = (numerador * numerador);
    //console.log(`Fração: ${numerador}/ ${denominador}`)
    let fracao = numerador / denominador;
    if(numerador % 2 == 0){
        S = S - fracao;
    }else{
        S = S + fracao;
    }
}