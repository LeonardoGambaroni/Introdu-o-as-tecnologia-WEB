function ehPalindromo(palavra: string): boolean{
    const palavraFormatada = palavra.toLowerCase();

    const invertida = palavraFormatada.split("").reverse().join("");

    return palavraFormatada === invertida;
}

function mostrarResultado(palavra : string): void{
    if(ehPalindromo(palavra)){
        console.log(`A palavra: "${palavra}" é um palindromo`);
    }
    else{
        console.log(`A palavra "${palavra}" não é um palindromo`);
    }
}

mostrarResultado("arara");
mostrarResultado("Carro");
mostrarResultado("Ovo");
