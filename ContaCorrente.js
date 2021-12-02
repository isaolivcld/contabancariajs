

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

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor; /* aqui eu posso colocar: if (valor<0) return; daí esse return vai querer dizer que, se o valor for menor que zero, não é pra executar
            nada no código, porque vai "retornar a função". Daí não vai executar nada, e o nome é early return. */
                                
        } else {
            console.log ("valor de depósito inválido, tente novamente");
        }
    }
}// quando eu quiser mostrar que não é pra alterar um código, basta colocar um _ na frente dele. Por exemplo: _saldo 