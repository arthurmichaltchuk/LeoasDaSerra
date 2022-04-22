import { IEditVM } from "src/app/shared/IEditVM";

export class AlunaEditViewModel implements IEditVM{
    id: number;
    nome: string;
    dataNascimento: Date;
    escola: string;
    endereco: string;
    nomeResponsavel: string;
    telefone: string;
}