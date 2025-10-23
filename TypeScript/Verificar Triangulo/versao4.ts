function verificarSeTrianguloV4(
    a: number,
    b: number,
    c: number

): number {

    let resultado;
    if(a > 0 && b > 0 && c > 0){
        if(a < (b+c) && b < (a+c) && c < (a+b)){
            resultado = 0;
        }else{
            resultado = -1;
        }
    }else{
        resultado = -2;
    }
    return resultado;
}

function analisaVereditoTriangulo(r: number): string{
    let vereditostr;
    switch(r){
        case 0:
            vereditostr = "Forma Triângulo";
            break;
        case -1:
            vereditostr = "Não forma triângulo. Não atende a condição de existência de um triângulo.";
            break;
        case -2:
            vereditostr = "Não forma triângulo. Um ou mais lados é igual a 0 ou negativo";
            break;
        default:
            vereditostr = "Parâmetro r Inválido."
            break;
    }
    return vereditostr;
}

const str = analisaVereditoTriangulo(verificarSeTrianguloV4(2,3,4));
console.log(str);