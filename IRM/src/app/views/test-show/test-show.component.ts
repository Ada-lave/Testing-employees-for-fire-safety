import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-test-show',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './test-show.component.html',
  styleUrl: './test-show.component.scss'
})
export class TestShowComponent {
  public questions: any = [{},{},{},{},{},{},{},{},{},{}]
}
