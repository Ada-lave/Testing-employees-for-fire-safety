import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { TestsComponent } from './views/tests/tests.component';
import { TestShowComponent } from './views/test-show/test-show.component';
import { DocumentsComponent } from './views/documents/documents.component';
import { DocumentsCreateComponent } from './views/documents-create/documents-create.component';
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
        path: 'documents',component:DocumentsComponent
    },
    {
        path: 'create',component:DocumentsCreateComponent
    },
    {
        path:'**', component:HomeComponent
    }
];
