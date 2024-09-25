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
  documents:IPdf[] = []
  ngOnInit(): void {
    this.themeService.getThemesById('1').pipe().subscribe((res:any)=>{
      console.log(res)
      for(let i =0; i < 10; i++){
        this.documents.push(res.attachments[1])
      }
    })

  }

}
