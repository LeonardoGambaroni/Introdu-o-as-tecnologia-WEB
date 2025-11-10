function calcularSalario(
    salario_base: number, 
    valor_vendas: number, 
    percentual_comissao: number
): number {
    if(valor_vendas === 0){
        return salario_base;
    }
    else{   
    let salario_total: number = salario_base + (valor_vendas * percentual_comissao/100);
    return salario_total;
    }
}

function mostrarSalario(
    nome: string, 
    salario_base: number, 
    valor_vendas: number, 
    percentual_comissao: number
): void{
    let salario_total: number = calcularSalario(salario_base, valor_vendas, percentual_comissao);
    console.log(`O funcionario ${nome} receberá ${salario_total.toFixed(2)} este mês`);
}


mostrarSalario("Leonardo", 2000, 5000, 10);