import {
    Cliente
} from "./Cliente.js";
import {
    ContaCorrente
} from "./ContaCorrente.js";


const cliente1 = new Cliente();
cliente1.nome = `Isabel Oliveira`;
cliente1.cpf = 111232123221;

const cliente2 = new Cliente();
cliente2.nome = `Cyper Notorius`;
cliente2.cpf = 56545645465;

const contaCorrente1 = new ContaCorrente( cliente1, 451);
contaCorrente1._saldo = 0;
contaCorrente1.depositar(500);


const contaCorrente2 = new ContaCorrente();

contaCorrente2.cliente = cliente2;
contaCorrente2.agencia = 4568;
contaCorrente2._saldo = 0
contaCorrente2.depositar(900);
//eu errei fazendo contaCorrente2.sacar=(200); numa vez aí, e aí a propriedade aparecia 100% fiel, ao invés de apenas realizar a operação de saque. Então, 
// é legal ter em mente que o sinal de igual é só pra quando eu vou escrever o valor da propriedade de forma direta ali, e não pra realizar uma situação de dependência 
//entre parâmetros pré-estabelecidos, por exemplo, o if{..}/else{..}

contaCorrente1.transferir(10, contaCorrente2);


console.log(contaCorrente1);
console.log( contaCorrente2);
console.log(ContaCorrente.numeroDeContas)
