import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ThemeService } from '../../services/theme.service';
import { Theme } from '../../models/theme';
@Component({
  selector: 'app-tests',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  providers: [ThemeService],
  templateUrl: './tests.component.html',
  styleUrl: './tests.component.scss'
})
export class TestsComponent  implements OnInit {
  public themes: Theme[] = []
  public themeService: ThemeService = inject(ThemeService)

  constructor() {}


  ngOnInit(): void {
      this.themeService.getThemes().subscribe((response) => {
        this.themes = response
        console.log(response)
      })


  }
}
