import { Component, inject } from '@angular/core';
import { SectionsService } from '../../services/sections.service';
import { IPdf } from '../../models/pdf';
import { DocumentsGridComponent } from '../../components/documents-grid/documents-grid.component';
@Component({
  selector: 'app-booklet',
  standalone: true,
  imports: [
    DocumentsGridComponent
  ],
  templateUrl: './booklet.component.html',
  styleUrl: './booklet.component.scss'
})
export class BookletComponent {
  sectionsService:SectionsService = inject(SectionsService)
  documents:IPdf[] = []
  findDocuments(documents:any){
    console.log(documents)
    documents.forEach((document:any) => {
      if(document && document.name == 'Памятки'){
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
