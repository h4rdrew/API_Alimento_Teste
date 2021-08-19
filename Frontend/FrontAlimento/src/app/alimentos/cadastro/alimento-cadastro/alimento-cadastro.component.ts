import { AlimentoModel } from './../../../services/models/alimento-model';
import { AlimentoService } from './../../../services/alimento.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alimento-cadastro',
  templateUrl: './alimento-cadastro.component.html',
  styleUrls: ['./alimento-cadastro.component.scss'],
})
export class AlimentoCadastroComponent implements OnInit {
  alimentoModel: AlimentoModel = {};
  listaAlimentos: any[] | undefined;

  constructor(private alimentoService: AlimentoService) {}

  cadastroAlimento() {
    this.alimentoService
      .cadastro_Alimento(this.alimentoModel)
      .subscribe((resultado) => {
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

  /*consultaAlimentoID(id: number) {
    this.alimentoService
      .consulta_Alimento(id)
      .subscribe((alimentoModel: AlimentoModel) => {
        console.table(alimentoModel);
        this.alimentoModel = alimentoModel;
      });
  }*/

  ngOnInit() {
    this.alimentoService
      .consulta_Alimento(2)
      .subscribe((alimentoModel: AlimentoModel) => {
        console.table(alimentoModel);
        this.alimentoModel = alimentoModel;
      });
  }
}
