import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { Department } from '../models/department';

interface DepartmentQueryParams {
  with_employes?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(
    private http: HttpClient
  ) { }

  getDepartments(queryParams: DepartmentQueryParams) {
    return this.http.get<Department[]>(`${environments.backProtocol}://${environments.backHost}:${environments.backPort}/api/v1/departments`, { params: {...queryParams} })
  }

  getDepartmentById(id: number, queryParams: DepartmentQueryParams) {
    return this.http.get<Department[]>(`${environments.backProtocol}://${environments.backHost}:${environments.backPort}/api/v1/departments/${id}`, {params: {...queryParams}})
  }
}
