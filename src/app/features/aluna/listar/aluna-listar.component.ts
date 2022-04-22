import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IHttpAlunaService } from '../services/IHttpAlunaService';
import { AlunaListViewModel } from '../viewModels/AlunaListViewModel';

@Component({
  selector: 'app-aluna-listar',
  templateUrl: './aluna-listar.component.html'
})
export class AlunaListarComponent implements OnInit {

  listaAlunas: AlunaListViewModel[];
  listaAlunasTotal: AlunaListViewModel[];
  alunaSelecionado: any;

  page = 1;
  pageSize = 5;
  collectionSize = 0;

  constructor(private router: Router, @Inject('IHttpAlunaServiceToken') private servicoAluna: IHttpAlunaService, private servicoModal: NgbModal) { }

  ngOnInit(): void {
    this.obterAlunas();
  }

  obterAlunas(): void {
    this.servicoAluna.getAll()
      .subscribe(alunas => {
        this.listaAlunasTotal = alunas;
        this.atualizarAlunas();
      });
  }

  atualizarAlunas() {
    this.listaAlunas = this.listaAlunasTotal
      .map((aluna, i) => ({ u: i + 1, ...aluna }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

    this.collectionSize = this.listaAlunasTotal.length;
  }

  abrirConfirmacao(modal: any) {
    this.servicoModal.open(modal).result.then((resultado) => {
      if (resultado == 'Excluir') {
        this.servicoAluna.excluir(this.alunaSelecionado)
          .subscribe(() => {
            this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
              this.router.navigate(['aluna/listar']);
            });
          });
      }
    }).catch(erro => erro);
  }
}
