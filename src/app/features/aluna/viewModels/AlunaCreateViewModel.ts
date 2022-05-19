export class AlunaCreateViewModel {
    nome: string;
    dataNascimento: Date;
    escola: string;
    endereco: string;
    nomeResponsavel: string;
    telefone: string;

    constructor(    nome: string, dataNascimento: Date, escola: string, endereco: string, nomeResponsavel: string, telefone: string) {
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.escola = escola;
        this.endereco = endereco;
        this.nomeResponsavel = nomeResponsavel;
        this.telefone = telefone;
    }
}