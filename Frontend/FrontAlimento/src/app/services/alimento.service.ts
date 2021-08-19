import { AlimentoModel } from './models/alimento-model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlimentoService {
  url = 'https://localhost:44344/alimentos/';
  constructor(private httpClient: HttpClient) {
  }

  atualiza_Alimento(alimentoModel: AlimentoModel) {}

  cadastro_Alimento(alimentoModel: AlimentoModel): Observable<AlimentoModel> {
    return this.httpClient.post<AlimentoModel>(
      this.url + 'cadastra_alimento',
      alimentoModel
    );
  }

  consulta_Alimento(id: number): Observable<AlimentoModel> {
    return this.httpClient.get<AlimentoModel>(
      this.url + 'consulta_alimento',
      id
    );
  }

  consulta_Alimento_Nome(nome: string): Observable<AlimentoModel> {
    return this.httpClient.get<AlimentoModel>(
      this.url + 'busca_alimento_nome'
    )
  }

  listar_Alimento(): Observable<AlimentoModel[]> {
    return this.httpClient.get<AlimentoModel[]>(
      this.url + 'lista_todos_alimentos'
    );
  }
}
