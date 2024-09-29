import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {

  constructor() { }
  loaderShow:boolean = false
  
  show(){
    this.loaderShow = true
  }
  hide(){
    this.loaderShow = false
  }
}
