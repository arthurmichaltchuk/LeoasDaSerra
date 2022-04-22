import { IHttpBaseService } from "src/app/shared/services/IHttpBaseService";
import { AlunaCreateViewModel } from "../viewModels/AlunaCreateViewModel";
import { AlunaDetailsViewModel } from "../viewModels/AlunaDetailsViewModel";
import { AlunaEditViewModel } from "../viewModels/AlunaEditViewModel";
import { AlunaListViewModel } from "../viewModels/AlunaListViewModel";

export interface IHttpAlunaService 
extends IHttpBaseService<AlunaListViewModel, AlunaDetailsViewModel, AlunaCreateViewModel, AlunaEditViewModel>{

    
}