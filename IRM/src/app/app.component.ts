import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import { LoaderService } from './services/loader.service';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  loaderService:LoaderService = inject(LoaderService)
  title = 'IRM';

}
