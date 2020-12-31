import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HttpsComponent } from './pages/https/https.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { ConvertComponent } from './pages/convert/convert.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'https'
    },
    {
        path: 'https',
        component: HttpsComponent
    },
    {
        path: 'loader',
        component: LoaderComponent
    },
    {
        path: 'convert',
        component: ConvertComponent
    }
];

@NgModule({
    declarations: [HttpsComponent, LoaderComponent, ConvertComponent],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
