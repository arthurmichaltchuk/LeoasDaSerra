import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IHttpAlunaService } from '../services/IHttpAlunaService';
import { AlunaDetailsViewModel } from '../viewModels/AlunaDetailsViewModel';
import { AlunaEditViewModel } from '../viewModels/AlunaEditViewModel';

@Component({
  selector: 'app-aluna-editar',
  templateUrl: './aluna-editar.component.html'
})
export class AlunaEditarComponent implements OnInit {

  cadastroForm: FormGroup;
  id: any;
  aluna: AlunaEditViewModel;

  chaves: any[];

  constructor(private _Activatedroute: ActivatedRoute,
    @Inject('IHttpAlunaServiceToken') private servicoAluna: IHttpAlunaService,
    private router: Router) { }

  ngOnInit(): void {
    this.id = this._Activatedroute.snapshot.paramMap.get("id");

    this.cadastroForm = new FormGroup({
      id: new FormControl(''),
      meio: new FormControl(''),
      codigo: new FormControl(''),
      nome: new FormControl(''),
      valor: new FormControl(''),
      valorMinimo: new FormControl(''),
      validade: new FormControl(''),
      idParceiro: new FormControl(''),
      tipo: new FormControl('')
    });

    this.carregarAluna();
  }

  carregarAluna(): void {
    this.servicoAluna.getById(this.id)
      .subscribe((aluna: AlunaDetailsViewModel) => {
        this.carregarFormulario(aluna);
      });
  }

  carregarFormulario(aluna: AlunaDetailsViewModel) {

    this.cadastroForm = new FormGroup({
      id: new FormControl(aluna.id),
      nome: new FormControl(aluna.nome),
      dataNascimento: new FormControl(aluna.dataNascimento.toLocaleString().substring(0, 10)),
      escola: new FormControl(aluna.escola),
      endereco: new FormControl(aluna.endereco),
      nomeResponsavel: new FormControl(aluna.nomeResponsavel),
      telefone: new FormControl(aluna.telefone)
    });
  }

  atualizarAluna() {
    this.aluna = Object.assign({}, this.aluna, this.cadastroForm.value);
    this.aluna.id = this.id;

    this.servicoAluna.editar(this.aluna)
      .subscribe(() => {
        this.router.navigate(['aluna/listar']);
      });
  }

  cancelar(): void {
    this.router.navigate(['aluna/listar']);
  }
}
