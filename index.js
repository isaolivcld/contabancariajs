class Cliente {
    nome;
    cpf;

}

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
         if (this.saldo >= valor){
             this.saldo -= valor;
             
         } 
        

         else {
             console.log("Você não tem saldo o suficiente para realizar o saque")
         }

         
    }

    depositar(valor){
        if (valor > 0) {
            this.saldo += valor;
        } else {
            console.log ("valor de depósito inválido, tente novamente");
        }
    }



    
}



const contaCorrenteRafaelaRiggs = new ContaCorrente();

contaCorrenteRafaelaRiggs.nome="Rafaela Riggs";
contaCorrenteRafaelaRiggs.agencia=18472;
contaCorrenteRafaelaRiggs.saldo=500;
contaCorrenteRafaelaRiggs.depositar(500);
contaCorrenteRafaelaRiggs.sacar(50);


console.log(contaCorrenteRafaelaRiggs);

