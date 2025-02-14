import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TestsComponent } from './views/tests/tests.component';
import { TestShowComponent } from './views/test-show/test-show.component';
import { DocumentsComponent } from './views/documents/documents.component';
import { ThemeShowComponent } from './views/theme-show/theme-show.component';
import { DocumentsShowComponent } from './views/documents-show/documents-show.component';
import { BriefingsComponent } from './views/briefings/briefings.component';
import { BookletComponent } from './views/booklet/booklet.component';
import { ResultsComponent } from './views/results/results.component';
export const routes: Routes = [
    {
        path:'home', component:HomeComponent,
    },
    {
        path:'test/:id', component:TestShowComponent,
    },
    {
        path:'tests', component:TestsComponent
    },
    {
        path:'theme-show/:id', component:ThemeShowComponent
    },
    {
        path: 'documents', component:DocumentsComponent
    },
    {
        path: 'briefings', component:BriefingsComponent
    },
    {
        path: 'booklets', component:BookletComponent
    },
    {
      path: 'documentsShow/:path/viwer/:type',component:DocumentsShowComponent
    },
    {
      path: 'results',component:ResultsComponent
    },
    {
        path:'**', component:HomeComponent
    }
];
