import { Component, Input } from '@angular/core';
import { Theme } from '../../models/theme';
import { CommonModule } from '@angular/common';
import { IPdf } from '../../models/pdf';
@Component({
  selector: 'app-document-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './document-card.component.html',
  styleUrl: './document-card.component.scss'
})
export class DocumentCardComponent {
  @Input() document!:IPdf
  constructor(){}
}
