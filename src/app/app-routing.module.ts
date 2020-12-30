import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HttpsComponent } from './pages/https/https.component';

const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'https'
    },
    {
        path: 'https', component: HttpsComponent
    }
];

@NgModule({
    declarations: [HttpsComponent],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}