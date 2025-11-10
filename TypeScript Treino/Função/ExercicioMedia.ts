function avaliarAluno(n1: number, n2: number, n3: number): number {
    return (n1 + n2 + n3)/ 3;
}

function situacao(media: number): void{
    if(media >= 7){
        console.log("Situação: Aprovado");
    }
    else if(media >= 5 && media < 7){
        console.log("Situação: Recuperação");
    }
    else{
        console.log("Situação: Reprovado");
    }
}

let media: number = avaliarAluno(10, 10, 10);
console.log(`Sua media é: ${media}`);
situacao(media);
