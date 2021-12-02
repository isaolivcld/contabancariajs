import { Cliente } from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente";


const cliente1 = new Cliente();

const contaCorrenteRafaelaRiggs = new ContaCorrente();

contaCorrenteRafaelaRiggs.nome="Rafaela Riggs";
contaCorrenteRafaelaRiggs.agencia=18472;
contaCorrenteRafaelaRiggs.saldo=500;
contaCorrenteRafaelaRiggs.depositar(500);
contaCorrenteRafaelaRiggs.sacar(50);


console.log(contaCorrenteRafaelaRiggs);


