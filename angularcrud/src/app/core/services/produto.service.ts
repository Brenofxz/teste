import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from './types/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private readonly API = 'http://localhost:3000/produtos'

  constructor(private http: HttpClient) { }


  listar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API)
  }

  deletar(id: number): Observable<Produto[]> {
    return this.http.delete<any>(`${this.API}/${id}`)
  }


    incluir(Produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.API, Produto)
    }
    editar(Produto: Produto): Observable<Produto>{
    const url = `${this.API}/${Produto.id}`
    return this.http.put<Produto>(url, Produto)
    }
    buscarPorId(id: number): Observable<Produto | undefined> {
    return this.http.get<Produto>(this.API + `/${id}`);
    }
    


}
