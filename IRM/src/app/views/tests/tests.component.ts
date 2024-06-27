import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss'
})
export class TestsComponent {
  public themes: any = [
    {},{},{},{},{},{},{}
  ]
}
