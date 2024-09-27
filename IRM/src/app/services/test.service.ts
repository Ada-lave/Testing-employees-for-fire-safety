import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { Test } from '../models/test';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(
    private http: HttpClient
  ) { }

  getTestById(id: number) {
    return this.http.get<Test>(`${environments.backProtocol}://${environments.backHost}:${environments.backPort}/api/v1/tests/${id}`)
  }
  sendTest(test:any){
    return this.http.post<Test>(`${environments.backProtocol}://${environments.backHost}:${environments.backPort}/api/v1/tests/${test.id}/check/`,test)
  }
  getAllTest(){
    return this.http.get<Test>(`${environments.backProtocol}://${environments.backHost}:${environments.backPort}/api/v1/tests/`)
  }
}
