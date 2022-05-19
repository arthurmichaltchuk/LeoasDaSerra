import { IHttpBaseService } from "src/app/shared/services/IHttpBaseService";
import { ChamadaCreateViewModel } from "../viewModels/ChamadaCreateViewModel";
import { ChamadaDetailsViewModel } from "../viewModels/ChamadaDetailsViewModel";
import { ChamadaEditViewModel } from "../viewModels/ChamadaEditViewModel";
import { ChamadaListViewModel } from "../viewModels/ChamadaListViewModel";

export interface IHttpChamadaService 
extends IHttpBaseService<ChamadaListViewModel, ChamadaDetailsViewModel, ChamadaCreateViewModel, ChamadaEditViewModel>{

    
}