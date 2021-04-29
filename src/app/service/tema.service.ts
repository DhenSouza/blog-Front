import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  url = environment.server + environment.port

  constructor(private http: HttpClient) { }
 
  token = {
    headers: new HttpHeaders().set('Authorization', environment.token)
  }
  
  getAllTema(): Observable<Tema[]> {
    return this.http.get<Tema[]>(`${this.url}/temas`,  this.token)
  }

  getByIdTema(id: number): Observable<Tema> {
  return this.http.get<Tema>(`${this.url}/temas/${id}`, this.token)
  }

  getByNomeTema(nome: string): Observable<Tema[]> {
    return this.http.get<Tema[]>(`${this.url}/temas/nome/${nome}`, {
      headers: {'Authorization': environment.token}
    })
  }

  postTema(tema: Tema): Observable<Tema> {
    return this.http.post<Tema>(`${this.url}/temas`, tema, this.token)
  }

  putTema(tema: Tema): Observable<Tema> {
    return this.http.put<Tema>(`${this.url}/temas`, tema, this.token)
  }

  deleteTema(id: number) {
    return this.http.delete(`${this.url}/temas/${id}`, this.token)
  }
  
}
