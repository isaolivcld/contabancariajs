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
        if (this.saldo > 0) {
            this.saldo +=0;
        } else {
            console.log ("valor de depósito inválido, tente novamente");
        }
    }



    
}



const contaCorrenteRafaelaRiggs = new ContaCorrente();

contaCorrenteRafaelaRiggs.nome="Rafaela Riggs";
contaCorrenteRafaelaRiggs.agencia=18472;
contaCorrenteRafaelaRiggs.saldo=500;
contaCorrenteRafaelaRiggs.sacar(50);
contaCorrenteRafaelaRiggs.depositar(100);


console.log(contaCorrenteRafaelaRiggs);

