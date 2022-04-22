import { Injectable } from '@angular/core';
import { HttpBaseService } from 'src/app/shared/services/http-base.service';
import { AlunaCreateViewModel } from '../viewModels/AlunaCreateViewModel';
import { AlunaDetailsViewModel } from '../viewModels/AlunaDetailsViewModel';
import { AlunaEditViewModel } from '../viewModels/AlunaEditViewModel';
import { AlunaListViewModel } from '../viewModels/AlunaListViewModel';
import { IHttpAlunaService } from './IHttpAlunaService';

@Injectable({
  providedIn: 'root'
})
export class HttpAlunaService
extends HttpBaseService<AlunaListViewModel, AlunaDetailsViewModel, AlunaCreateViewModel, AlunaEditViewModel> 
implements IHttpAlunaService {

  diretorio='Aluna'

}
