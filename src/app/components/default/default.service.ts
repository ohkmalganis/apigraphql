import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL } from '../../config';

@Injectable({
  providedIn: 'root'
})
export class DefaultService {

  public url: string;
  public status: string;

  constructor(
    public _http: HttpClient
  ) 
  {
    this.url = GLOBAL.url;
  }

  getDatas(): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.get(this.url + 'users', { headers: headers });
  }

  postDatas(data: any): Observable<any> {
    let json = JSON.stringify(data);
    let params = "json=" + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.post(this.url + 'users', params, { headers: headers });
  }

  putDatas(id:any, data: any): Observable<any> {
    let json = JSON.stringify(data);
    let params = "json=" + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.put(this.url + 'users/' + id, params, { headers: headers });
  }

  patchDatas(id:any, data: any): Observable<any> {
    let json = JSON.stringify(data);
    let params = "json=" + json;
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.patch(this.url + 'users/' + id, params, { headers: headers });
  }

  deleteDatas(id:any): Observable<any> {
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    return this._http.delete(this.url + 'users/' + id, { headers: headers });
  }

}
