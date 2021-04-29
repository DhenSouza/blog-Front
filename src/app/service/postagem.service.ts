import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Postagem } from '../model/Postagem';

@Injectable({
  providedIn: 'root'
})
export class PostagemService {

  url = environment.server + environment.port

  constructor(
    private http: HttpClient
  ) { }

  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }


  getAllPostagens(): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${this.url}/postagens`, this.token)
  }

  getByIdPostagem(id: number): Observable<Postagem> {
    return this.http.get<Postagem>(`${this.url}/postagens/${id}`, this.token)
  }

  getByTituloPostagem(titulo: string): Observable<Postagem[]> {
    return this.http.get<Postagem[]>(`${this.url}/postagens/titulo/${titulo}`, {
      headers: {'Authorization': environment.token}
    })
  }

  postPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.post<Postagem>(`${this.url}/postagens`, postagem, this.token)
  }

  putPostagem(postagem: Postagem): Observable<Postagem> {
    return this.http.put<Postagem>(`${this.url}/postagens`, postagem, this.token)
  }

  deletePostagem(id: number){
    return this.http.delete(`${this.url}/postagens/${id}`, this.token)
  }

}
