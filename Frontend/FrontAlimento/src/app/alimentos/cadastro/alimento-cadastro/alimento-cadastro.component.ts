import { AlimentoModel } from './../../../services/models/alimento-model';
import { AlimentoService } from './../../../services/alimento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimento-cadastro',
  templateUrl: './alimento-cadastro.component.html',
  styleUrls: ['./alimento-cadastro.component.scss'],
})
export class AlimentoCadastroComponent implements OnInit {
  //referente -> cadastroAlimento()
  cadastroAlimentoModel: AlimentoModel = {};

  //referente -> listarAlimentos()
  listaAlimentos: any[] | undefined;

  //referente -> consultaAlimentoID()
  alimentoID: number = 0;
  alimentoIDModel: AlimentoModel = {};

  //referente - > consultaAlimentoNome()
  alimentoNome: string = ""
  listaAlimentosNome: any[] | undefined;

  //referente - > atualizaCadastro()
  atualizaAlimentoModel: AlimentoModel = {};

  constructor(private alimentoService: AlimentoService) {}

  cadastroAlimento() {
    this.alimentoService
      .cadastro_Alimento(this.cadastroAlimentoModel)
      .subscribe((resultado) => {
        console.log(resultado);
      });
  }

  atualizaCadastro(){
    this.alimentoService
    .atualiza_Alimento(this.atualizaAlimentoModel)
    .subscribe((resultado) =>{
      console.log(resultado);
    });
  }

  listarAlimentos() {
    this.alimentoService
      .listar_Alimento()
      .subscribe((alimentoModel: AlimentoModel[]) => {
        console.table(alimentoModel);
        this.listaAlimentos = alimentoModel;
      });
  }

  consultaAlimentoID() {
    this.alimentoService
      .consulta_Alimento(this.alimentoID)
      .subscribe((alimentoModel: AlimentoModel) => {
        console.table(alimentoModel);
        this.alimentoIDModel = alimentoModel;
      });
  }

  consultaAlimentoNome(){
    this.alimentoService
    .consulta_Alimento_Nome(this.alimentoNome)
    .subscribe((alimentoModel: AlimentoModel[]) => {
      console.table(alimentoModel);
      this.listaAlimentosNome = alimentoModel;
    })
  }

  ngOnInit() {
  }
}
