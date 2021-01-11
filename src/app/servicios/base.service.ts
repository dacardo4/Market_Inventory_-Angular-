import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    private http: HttpClient
  ) { }

  private urlHttp: string = environment.production ? environment.urlBackProd : environment.urlBackDev;
  
  httpGet(url: string): any {
    return this.http.get(this.urlHttp + url);
  }

  httpPost(url: string, data: any): any {
    return this.http.post(this.urlHttp + url, data);
  }

  httpPatch(url: string, data: any): any {
    return this.http.patch(this.urlHttp + url, data);
  }

  httpDelete(url: string): any {
    return this.http.delete(this.urlHttp + url);
  }
}
