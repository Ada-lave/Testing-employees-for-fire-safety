import { Component, OnInit } from '@angular/core';
import { TextRedactorComponent } from '../../component/text-redactor/text-redactor.component';
@Component({
  selector: 'app-documents-create',
  standalone: true,
  imports: [],
  templateUrl: './documents-create.component.html',
  styleUrl: './documents-create.component.scss'
})
export class DocumentsCreateComponent implements OnInit {
  ngOnInit(): void {
      
  }

  createText(block:HTMLElement):void{
    block.innerHTML()
  }
  createTemplate():void{

  }
  createCursiv():void{

  }

  
}
