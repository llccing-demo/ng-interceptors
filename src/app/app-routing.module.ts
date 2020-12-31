import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HttpsComponent } from './pages/https/https.component';
import { LoaderComponent } from './pages/loader/loader.component';
import { ConvertComponent } from './pages/convert/convert.component';
import { HeadersComponent } from './pages/headers/headers.component';
import { NotifyComponent } from './pages/notify/notify.component';
import { ErrorComponent } from './pages/error/error.component';

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
    },
    {
        path: 'notify',
        component: NotifyComponent
    },
    {
        path: 'error',
        component: ErrorComponent
    }
];

@NgModule({
    declarations: [
        HttpsComponent,
        LoaderComponent,
        ConvertComponent,
        HeadersComponent,
        NotifyComponent,
        ErrorComponent
    ],
    imports: [CommonModule, RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
