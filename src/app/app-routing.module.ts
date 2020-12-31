import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HttpsComponent } from './pages/https/https.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { ConvertComponent } from './pages/convert/convert.component';
import { HeadersComponent } from './pages/headers/headers.component';

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
    },
    {
        path: 'headers',
        component: HeadersComponent
    }
];

@NgModule({
    declarations: [HttpsComponent, LoaderComponent, ConvertComponent, HeadersComponent],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
