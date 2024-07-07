import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FirmsResponse } from '../models/market.model';

@Injectable({
  providedIn: 'root'
})
export class ApiHelloService {
  private readonly _baseUrl: string = 'http://localhost:3000/firms';

  constructor(
    private readonly http: HttpClient
  ) {}

  public getFirms(): Observable<FirmsResponse> {
    return this.http.get<FirmsResponse>(this._baseUrl);
  }
}
