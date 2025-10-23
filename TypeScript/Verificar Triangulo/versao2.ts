function verificarSeTrianguloV2(
    a: number,
    b: number,
    c: number

): boolean {

    let triangulo = false;
    if ((a > 0) && 
        (b > 0) && 
        (c > 0) && 
        (a < (b + c)) &&
        (b < (a + c)) &&
        (c < a + b)){
        triangulo = true;
    }
    return triangulo;
}

const res2 = verificarSeTrianguloV2(2,3,4);
console.log(res2);
