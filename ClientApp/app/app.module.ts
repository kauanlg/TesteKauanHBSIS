import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './components/app/app.component'
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/myDetails/clientes.Component';
import { DetailComponent } from './components/myDetails/detail.Component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        ClienteComponent,
        DetailComponent
    ],
    imports: [
        FormsModule,
        HttpModule,
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'my-detail', component: ClienteComponent },
            { path: 'detail/:id', component: DetailComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
