import { Cliente } from "./Cliente.js";
import { contaCorrente } from "./ContaCorrente.js";
import{contaPoupanca} from "./contaPoupanca";

const cliente1 = new Cliente("Ricardo", 11122233309);
const conta1 = new contaCorrente(1001, cliente1);


const cliente2 = new Cliente("Alice", 44455566609);
const conta2 = new contaPoupanca(1002, cliente2);


console.log(contaCorrente.numeroDeContas);

// console.log(contaCorrenteRicardo.saldo);
// contaCorrenteRicardo.saldo = 100;
// console.log(contaCorrenteRicardo.saldo);

// contaCorrenteRicardo.sacar(150);
// console.log(contaCorrenteRicardo.saldo);


// contaCorrenteRicardo.sacar(50);
// console.log(contaCorrenteRicardo.saldo);

// contaCorrenteRicardo.depositar(100);
// console.log(contaCorrenteRicardo.saldo);

// console.log(cliente1);
// console.log(cliente2);