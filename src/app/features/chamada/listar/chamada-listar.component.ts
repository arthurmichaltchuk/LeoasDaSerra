import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { IHttpChamadaService } from '../services/IHttpChamadaService';
import { ChamadaListViewModel } from '../viewModels/ChamadaListViewModel';

@Component({
  selector: 'app-chamada-listar',
  templateUrl: './chamada-listar.component.html'
})
export class ChamadaListarComponent implements OnInit {

  listaChamadas: ChamadaListViewModel[];
  listaChamadasTotal: ChamadaListViewModel[];
  chamadaSelecionada: any;

  page = 1;
  pageSize = 5;
  collectionSize = 0;

  constructor(private router: Router, @Inject('IHttpChamadaServiceToken') private servicoChamada: IHttpChamadaService, private servicoModal: NgbModal) { }

  ngOnInit(): void {
    this.obterChamadas();
  }

  obterChamadas(): void {
    this.servicoChamada.getAll()
      .subscribe(chamadas => {
        this.listaChamadasTotal = chamadas;
        this.atualizarChamadas();
      });
  }

  atualizarChamadas() {
    this.listaChamadas = this.listaChamadasTotal
      .map((chamada, i) => ({ u: i + 1, ...chamada }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);

    this.collectionSize = this.listaChamadasTotal.length;
  }
}
