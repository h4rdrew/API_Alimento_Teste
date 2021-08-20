import { AlimentoModel } from './models/alimento-model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlimentoService {
  url = 'https://localhost:44344/alimentos/';
  constructor(private httpClient: HttpClient) {}

  atualiza_Alimento(alimentoModel: AlimentoModel): Observable<AlimentoModel> {
    return this.httpClient.post<AlimentoModel>(
      this.url + 'atualiza_alimento',
      alimentoModel);
  }

  cadastro_Alimento(alimentoModel: AlimentoModel): Observable<AlimentoModel> {
    return this.httpClient.post<AlimentoModel>(
      this.url + 'cadastra_alimento',
      alimentoModel
    );
  }

  consulta_Alimento(id: number): Observable<AlimentoModel> {
    return this.httpClient.get<AlimentoModel>(this.url + 'consulta_alimento', {
      params: new HttpParams().set('id', id),
    });
  }

  consulta_Alimento_Nome(nome: string): Observable<AlimentoModel[]> {
    return this.httpClient.get<AlimentoModel[]>(
      this.url + 'busca_alimento_nome',
      { params: new HttpParams().set('nome', nome) }
    );
  }

  listar_Alimento(): Observable<AlimentoModel[]> {
    return this.httpClient.get<AlimentoModel[]>(
      this.url + 'lista_todos_alimentos'
    );
  }
}
