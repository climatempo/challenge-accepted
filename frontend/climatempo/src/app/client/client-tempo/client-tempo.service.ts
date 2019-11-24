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
export class ClientTempoService {

  /**
   * Construtor da classe.
   *
   * @param http
   */
  constructor(private http: HttpClient) {
  }

  /**
   * Busca previsao do tempo por cidade.
   */
  public getPrevisaoTempoPorCidade(idCidade): Observable<any> {
    return this.http.get(`${environment.url}/api/previsao-tempo-por-cidade/${idCidade}`);
  }
}
