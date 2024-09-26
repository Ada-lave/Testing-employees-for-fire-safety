import { Component, inject, OnInit } from '@angular/core';
import { DocumentsGridComponent } from '../../components/documents-grid/documents-grid.component';
import { SectionsService } from '../../services/sections.service';
import { IPdf } from '../../models/pdf';
@Component({
  selector: 'app-briefings',
  standalone: true,
  imports: [DocumentsGridComponent],
  templateUrl: './briefings.component.html',
  styleUrl: './briefings.component.scss'
})
export class BriefingsComponent implements OnInit {
  sectionsService:SectionsService = inject(SectionsService)
  documents:IPdf[] = []
  findDocuments(documents:any){
    console.log(documents)
    documents.forEach((document:any) => {
      if(document && document.name == 'Инструктаж'){
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
