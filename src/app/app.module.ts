import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app-router';

import {AppComponent} from './app.component';
import {HomeComponent} from './pages/home/home.component';
import {TableComponent} from './pages/table/table.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TableComponent
    ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
