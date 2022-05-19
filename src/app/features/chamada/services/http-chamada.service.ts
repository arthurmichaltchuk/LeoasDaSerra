import { Injectable } from '@angular/core';
import { HttpBaseService } from 'src/app/shared/services/http-base.service';
import { ChamadaCreateViewModel } from '../viewModels/ChamadaCreateViewModel';
import { ChamadaDetailsViewModel } from '../viewModels/ChamadaDetailsViewModel';
import { ChamadaEditViewModel } from '../viewModels/ChamadaEditViewModel';
import { ChamadaListViewModel } from '../viewModels/ChamadaListViewModel';
import { IHttpChamadaService } from './IHttpChamadaService';

@Injectable({
  providedIn: 'root'
})
export class HttpChamadaService
extends HttpBaseService<ChamadaListViewModel, ChamadaDetailsViewModel, ChamadaCreateViewModel, ChamadaEditViewModel> 
implements IHttpChamadaService {

  diretorio='Chamada'

}
