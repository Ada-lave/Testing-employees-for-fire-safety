import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Result } from '../models/result';
import { environments } from '../../environments/environments';

interface ResultQueryParams {
  department_id?: number|string
  test_id?: number|string
}

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(
    private http: HttpClient
  ) { }

  getResults(queryParams: ResultQueryParams) {
    return this.http.get<Result[]>(`${environments.backProtocol}://${environments.backHost}:${environments.backPort}/api/v1/results`, { params: {...queryParams} })
  }
}
