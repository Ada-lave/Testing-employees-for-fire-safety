import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from '../../environments/environments';
import { Theme } from '../models/theme';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(
    private http: HttpClient
  ) { }

  getThemes() {
    return this.http.get<Theme[]>(`${environments.backProtocol}://${environments.backHost}:${environments.backPort}/api/v1/themes`)
  }
}
