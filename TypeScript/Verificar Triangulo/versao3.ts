function verificarSeTrianguloV3(
    a: number,
    b: number,
    c: number

): boolean {

    let resultado = false;
    if(a > 0 && b > 0 && c > 0){
        if(a < (b+c) && b < (a+c) && c < (a+b)){
            resultado = true;
            console.log("Forma triangulo.");
        }else{
            console.log("Não forma triângulo. Um ou mais lados não atende a condição de exitência de um triângulo.");
        }
    }else{
        console.log("Não forma triângulo. Um ou mais lados são 0 ou negativo.");
    }
    return resultado;
}

const res3 = verificarSeTrianguloV3(2,3,4);
console.log(res3);