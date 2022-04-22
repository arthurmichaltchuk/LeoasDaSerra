import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IHttpAlunaService } from '../services/IHttpAlunaService';
import { AlunaCreateViewModel } from '../viewModels/AlunaCreateViewModel';

@Component({
  selector: 'app-aluna-criar',
  templateUrl: './aluna-criar.component.html'
})
export class AlunaCriarComponent implements OnInit {

  cadastroForm: FormGroup;

  aluna: AlunaCreateViewModel;

  chaves: any[];

  constructor(@Inject('IHttpAlunaServiceToken') private servicoAluna: IHttpAlunaService,
    private router: Router) { }

  ngOnInit(): void {

    this.cadastroForm = new FormGroup({
      nome: new FormControl(''),
      dataNascimento: new FormControl(''),
      escola: new FormControl(''),
      endereco: new FormControl(''),
      nomeResponsavel: new FormControl(''),
      telefone: new FormControl(''),
    });
  }

  adicionarAluna() {
    this.aluna = Object.assign({}, this.aluna, this.cadastroForm.value);

    this.servicoAluna.inserir(this.aluna)
      .subscribe(() => {
        this.router.navigate(['aluna/listar']);
      });
  }

  cancelar(): void {
    this.router.navigate(['aluna/listar']);
  }
}
