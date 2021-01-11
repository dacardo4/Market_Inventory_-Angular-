import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private _httpService: BaseService,
  ) { }

  private localUrl: string = `products`;

  getProducto(): Observable<any> {
    let url: string = `${this.localUrl}`;
    return this._httpService.httpGet(url);
  }

  postProducto(data: object): Observable<any> {
    let url: string = `${this.localUrl}`;
    return this._httpService.httpPost(url, data);
  }
}
