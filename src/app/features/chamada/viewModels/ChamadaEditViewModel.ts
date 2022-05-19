import { IEditVM } from "src/app/shared/IEditVM";

export class ChamadaEditViewModel implements IEditVM{
    id: number;
    data: Date;
    idAlunas: number[];
}