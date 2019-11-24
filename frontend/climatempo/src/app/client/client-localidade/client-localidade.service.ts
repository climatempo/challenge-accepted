import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from "../../../environments/environment";

/**
 * Classe de integração com o serviço.
 */
@Injectable({
  providedIn: 'root'
})
export class ClientLocalidadeService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Recupera todas cidades.
   */
  public getLocalidades(): Observable<any> {
    return this.http.get(`${environment.url}/api/localidades`);
  }

}
