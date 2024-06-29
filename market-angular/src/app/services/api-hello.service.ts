import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HelloMessage } from '../models/market.model';

@Injectable({
  providedIn: 'root'
})
export class ApiHelloService {
  private readonly _baseUrl: string = 'http://localhost:3000';

  constructor(
    private readonly http: HttpClient
  ) {}

  public getHello(): Observable<HelloMessage> {
    return this.http.get<HelloMessage>(this._baseUrl);
  }
}
