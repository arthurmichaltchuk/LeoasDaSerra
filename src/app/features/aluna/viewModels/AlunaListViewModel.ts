export class AlunaListViewModel {
    id: number;
    nome: string;
    dataNascimento: Date;
    escola: string;
    endereco: string;
    nomeResponsavel: string;
    telefone: string;

    constructor(id: number, nome: string, dataNascimento: Date, escola: string, endereco: string, nomeResponsavel: string, telefone: string) {
        this.id = id;
        this.nome = nome;
        this.dataNascimento = dataNascimento;
        this.escola = escola;
        this.endereco = endereco;
        this.nomeResponsavel = nomeResponsavel;
        this.telefone = telefone;
    }
}