import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PdfViewerComponent, PdfViewerModule } from 'ng2-pdf-viewer';
import { environments } from '../../../environments/environments';
@Component({
  selector: 'app-documents-show',
  standalone: true,
  imports: [
    CommonModule,
    PdfViewerModule
  ],
  templateUrl: './documents-show.component.html',
  styleUrl: './documents-show.component.scss'
})
export class DocumentsShowComponent implements OnInit{
  activatedRoute:ActivatedRoute = inject(ActivatedRoute)
  public back = `${environments.backProtocol}://${environments.backHost}:${environments.backPort}/static/uploads/`
  path!:string
  ngOnInit(): void {
    this.path = this.back+this.activatedRoute.snapshot.params['path']
  }
}
