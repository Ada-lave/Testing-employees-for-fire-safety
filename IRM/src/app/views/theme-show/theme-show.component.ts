import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Theme } from '../../models/theme';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';
import { Attachment } from '../../models/attachment';
import { environments } from '../../../environments/environments';
import { PdfViewerModule } from 'ng2-pdf-viewer';
@Component({
  selector: 'app-theme-show',
  standalone: true,
  imports: [
    CommonModule,
    PdfViewerModule
  ],
  templateUrl: './theme-show.component.html',
  styleUrl: './theme-show.component.scss'
})
export class ThemeShowComponent implements OnInit{
  constructor(
    public activatedRoute:ActivatedRoute,
    public themeService:ThemeService
  ){}
  public theme!:any
  public videos:any = []
  public documents:any = []
  public back = `${environments.backProtocol}://${environments.backHost}://${environments.backPort}/`
  getFilesAndSort(){
    this.theme.attachments.forEach((file:Attachment) => {
      console.log(file)
        if(file.file_type.id == 1){
          this.videos.push(file)
          console.log(file)
        }else{
          this.documents.push(file)
        }
    });
    console.log(this.videos)
  }
  getTheme(){
    let id = this.activatedRoute.snapshot.params['id']
    this.themeService.getThemesById(id).pipe().subscribe((res)=>{
      this.theme = res
      this.getFilesAndSort()
    })
  }
  ngOnInit(){
    this.getTheme()

  }
}
