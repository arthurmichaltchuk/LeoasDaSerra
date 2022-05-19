import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IHttpAlunaService } from '../../aluna/services/IHttpAlunaService';
import { AlunaCreateViewModel } from '../../aluna/viewModels/AlunaCreateViewModel';
import { AlunaListViewModel } from '../../aluna/viewModels/AlunaListViewModel';
import { IHttpChamadaService } from '../services/IHttpChamadaService';
import { ChamadaCreateViewModel } from '../viewModels/ChamadaCreateViewModel';

@Component({
  selector: 'app-chamada-criar',
  templateUrl: './chamada-criar.component.html'
})
export class ChamadaCriarComponent implements OnInit {

  cadastroForm: FormGroup;

  chamada: ChamadaCreateViewModel;
  listaAlunas: AlunaListViewModel[] = [];
  aluna1: AlunaListViewModel = new AlunaListViewModel(1,'nome',new Date(2022, 5, 18),'objetivo','rua tal','responsavel','999999999');


  chaves: any[];

  constructor(@Inject('IHttpChamadaServiceToken') private servicoChamada: IHttpChamadaService,
    @Inject('IHttpAlunaServiceToken') private servicoAluna: IHttpAlunaService,
    private router: Router) { }

  ngOnInit(): void {
    this.listaAlunas.push(this.aluna1);
    this.cadastroForm = new FormGroup({
      data: new FormControl(''),
      idAluna: new FormControl(''),
    });
  }

  adicionarChamada() {
    this.chamada = Object.assign({}, this.chamada, this.cadastroForm.value);

    this.servicoChamada.inserir(this.chamada)
      .subscribe(() => {
        this.router.navigate(['chamada/listar']);
      });
  }

  carregarAlunas(): void {
    this.servicoAluna.getAll()
      .subscribe(parceiros => {
        this.listaAlunas = parceiros;
      });
  }

  cancelar(): void {
    this.router.navigate(['chamada/listar']);
  }
}
