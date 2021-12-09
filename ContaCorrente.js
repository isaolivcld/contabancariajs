import {
    Cliente
} from "./Cliente.js";

export class ContaCorrente {
    agencia;

    _cliente;

    _saldo = 0; // quando eu quiser mostrar que não é pra alterar um código, basta colocar um _ na frente dele. Por exemplo: _saldo 

     static numeroDeContas=0

    get saldo() {
        return this._saldo;
    }

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;

        } else {
            console.log("Você não tem saldo o suficiente para realizar o saque")
        }


    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
        /* aqui eu posso colocar: if (valor<0) return; daí esse return vai querer dizer que, se o valor for menor que zero, não é pra executar
                   nada no código, porque vai "retornar a função". Daí não vai executar nada, e o nome é early return. */
        else {
            console.log("valor de depósito inválido, tente novamente");
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado);
    }

    constructor (cliente, agencia) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1
    }
}