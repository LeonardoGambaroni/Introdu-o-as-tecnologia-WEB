let s: number = 0;
let sinalizador = 1;
for (let n = 1; n <= 10; n++){
    S += sinalizador + (n/ (n * n))
    sinalizador = sinalizador * (-1);
}
console.log(s);