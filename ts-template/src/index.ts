interface Pessoa {
    nome: string;
    idade: number;
}

function exibirPessoa(pessoa: Pessoa): void {
    console.log(`Nome: ${pessoa.nome}, Idade: ${pessoa.idade}`);
}

const henrique: Pessoa = { idade: 15, nome: "Henrique" };
exibirPessoa(henrique);

class TestClass {
    saldo: number;

    constructor(saldo: number) {
        this.saldo = saldo;
    }

    exibirSaldo(): void {
        console.log(`${this.saldo} é seu saldo`);
    }
}

const conta: TestClass = new TestClass(0);
conta.exibirSaldo();
