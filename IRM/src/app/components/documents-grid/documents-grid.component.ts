import { Theme } from './../../models/theme';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { DocumentCardComponent } from "../document-card/document-card.component";
import { IPdf } from '../../models/pdf';
@Component({
  selector: 'app-documents-grid',
  standalone: true,
  imports: [DocumentCardComponent,CommonModule],
  templateUrl: './documents-grid.component.html',
  styleUrl: './documents-grid.component.scss'
})
export class DocumentsGridComponent implements OnInit {
@Input() documents:IPdf[] = []
ngOnChanges(){
  
}
ngOnInit(): void {

}

}
