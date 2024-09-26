import { Component, Input } from '@angular/core';
import { Theme } from '../../models/theme';
import { CommonModule } from '@angular/common';
import { IPdf } from '../../models/pdf';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-document-card',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './document-card.component.html',
  styleUrl: './document-card.component.scss'
})
export class DocumentCardComponent {
  @Input() document!:IPdf
  path!:string
  ngOnChanges(){
    if(this.document){
      this.path = this.document.path.split('/static/uploads/')[1]
    }
  }
  constructor(){}
}
