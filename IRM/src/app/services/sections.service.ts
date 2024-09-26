import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environments } from '../../environments/environments';
@Injectable({
  providedIn: 'root'
})
export class SectionsService {

  constructor() { }
  http:HttpClient = inject(HttpClient)
  getAllSection() {
    return this.http.get<any>(`${environments.backProtocol}://${environments.backHost}:${environments.backPort}/api/v1/sections`)
  }
}
