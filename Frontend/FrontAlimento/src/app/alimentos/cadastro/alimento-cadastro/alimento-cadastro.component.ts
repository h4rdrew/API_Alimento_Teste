import { AlimentoModel } from './../../../services/models/alimento-model';
import { AlimentoService } from './../../../services/alimento.service';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-alimento-cadastro',
  templateUrl: './alimento-cadastro.component.html',
  styleUrls: ['./alimento-cadastro.component.scss'],
})
export class AlimentoCadastroComponent implements OnInit, AfterViewInit {

  constructor(private alimentoService: AlimentoService) {

  }

  //@ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    //this.newListaAlimentos.paginator = this.paginator;
  }

  clickedRows = new Set<AlimentoModel>();
  //referente -> cadastroAlimento()
  cadastroAlimentoModel: AlimentoModel = {};

  //referente -> listarAlimentos()
  newListaAlimentos = new MatTableDataSource();
  listaAlimentos: any[] = [];
  displayedColumns: string[] = ['id', 'nome', 'actions'];

  //referente -> consultaAlimentoID()
  alimentoID: number = 0;
  alimentoIDModel: AlimentoModel = {};

  //referente - > consultaAlimentoNome()
  alimentoNome: string = '';
  listaAlimentosNome: any[] | undefined;

  //referente - > atualizaCadastro()
  atualizaAlimentoModel: AlimentoModel = {};

  ngOnInit() {}

  cadastroAlimento() {
    this.alimentoService
      .cadastro_Alimento(this.cadastroAlimentoModel)
      .subscribe((resultado) => {
        console.log(resultado);
      });
  }

  atualizaCadastro() {
    this.alimentoService
      .atualiza_Alimento(this.atualizaAlimentoModel)
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

  consultaAlimentoID() {
    this.alimentoService
      .consulta_Alimento(this.alimentoID)
      .subscribe((alimentoModel: AlimentoModel) => {
        console.table(alimentoModel);
        this.alimentoIDModel = alimentoModel;
      });
  }

  consultaAlimentoNome() {
    this.alimentoService
      .consulta_Alimento_Nome(this.alimentoNome)
      .subscribe((alimentoModel: AlimentoModel[]) => {
        console.table(alimentoModel);
        this.listaAlimentosNome = alimentoModel;
      });
  }
}
