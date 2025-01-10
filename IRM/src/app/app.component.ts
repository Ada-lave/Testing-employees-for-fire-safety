import { Component, inject, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule, registerLocaleData } from '@angular/common';
import { LoaderService } from './services/loader.service';
import localeRu from '@angular/common/locales/ru';
import { MAT_DATE_LOCALE } from '@angular/material/core';
registerLocaleData(localeRu);
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    CommonModule
  ],
   providers: [
    { provide: LOCALE_ID, useValue: 'ru' },
    { provide: MAT_DATE_LOCALE, useValue: 'ru' },
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  loaderService:LoaderService = inject(LoaderService)
  title = 'IRM';

}
