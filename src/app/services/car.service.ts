import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GLOBAL} from './global';
import {Car} from '../models/car';

@Injectable()
export class CarService {
  public url: string;

  constructor(public _http: HttpClient) {
    this.url = GLOBAL.url;
  }

  pruebas() {
    return "Hola Mundo";
  }

  create(token, car:Car): Observable<any>{
    let json = JSON.stringify(car);
    let params = "json="+json;

    let headers = new HttpHeaders().set('Content-Type','application/x-ww-form-urlencoded').set('Authorization',token);

    return this._http.post(this.url+'car', params, {headers: headers});
  }
}
