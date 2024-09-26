import { SectionsService } from './../../services/sections.service';
import { Attachment } from './../../models/attachment';
import { Component, CUSTOM_ELEMENTS_SCHEMA, inject  } from '@angular/core';
import { DocumentsGridComponent } from '../../components/documents-grid/documents-grid.component';
import { CommonModule } from '@angular/common';
import { Input } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { OnInit } from '@angular/core';
import { IPdf } from '../../models/pdf';
@Component({
  selector: 'app-documents',
  standalone: true,
  imports: [
    DocumentsGridComponent,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './documents.component.html',

  styleUrl: './documents.component.scss'
})
export class DocumentsComponent implements OnInit{
  themeService:ThemeService = inject(ThemeService)
  sectionsService:SectionsService = inject(SectionsService)
  documents:IPdf[] = []

  findDocuments(documents:any){
    console.log(documents)
    documents.forEach((document:any) => {
      if(document && document.name == 'Документы'){
        console.log(document)
        this.documents = document.attachments
      }
    });
  }

  ngOnInit(): void {
    this.sectionsService.getAllSection().pipe().subscribe((res)=>{
      this.findDocuments(res)
    })
  }

}
