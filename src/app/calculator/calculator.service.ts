import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private readonly backendURL: any;

  constructor(private http: HttpClient) {
    this.backendURL = {};

    let baseUrl = `${environment.backendspring.protocol}://${environment.backendspring.host}`;
    if (environment.backendspring.port) {
      baseUrl += `:${environment.backendspring.port}`;
    }

    Object.keys(environment.backendspring.endpoints).forEach(k => this.backendURL[ k ] = `${baseUrl}${environment.backendspring.endpoints[ k ]}`);
  }

  current(): Observable<any>{
    return this.http.get<number>(this.backendURL.current, this._options());
  }

  add(num: number): Observable<any>{
    const body = new HttpParams().set('num', String(num));
    return this.http.post<number>(this.backendURL.add, body, this._options());
  }

  subtract(num: number): Observable<any>{
    const body = new HttpParams().set('num', String(num));
    return this.http.post<number>(this.backendURL.subtract, body, this._options());
  }

  accumulate(num: number): Observable<any>{
    const body = new HttpParams().set('num', String(num));
    return this.http.post<number>(this.backendURL.accumulate, body, this._options());
  }

  accumulateS(num: number): Observable<any>{
    const body = new HttpParams().set('num', String(num));
    return this.http.post<number>(this.backendURL.accumulateS, body, this._options());
  }

  /**
   * Function to return request options
   */
  private _options(headerList: object = {}): any {
    return { headers: new HttpHeaders(Object.assign({ 'Content-Type': 'application/x-www-form-urlencoded' }, headerList)) };
  }
}
