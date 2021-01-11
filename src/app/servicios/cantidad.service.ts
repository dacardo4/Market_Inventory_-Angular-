import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class CantidadService {

  constructor(
    private _httpService: BaseService,
  ) { }

  private localUrl: string = `quantities`;

  getCantidad(): Observable<any> {
    let url: string = `${this.localUrl}`;
    return this._httpService.httpGet(url);
  }

  postCantidad(data: object): Observable<any> {
    let url: string = `${this.localUrl}`;
    return this._httpService.httpPost(url, data);
  }

}
