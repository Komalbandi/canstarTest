import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {appRoutes} from './app-router';

import {AppComponent} from './app.component';
import {TableComponent} from './pages/table/table.component';
import {WidgetsComponent} from './pages/widgets/widgets.component';
import {CssElementsComponent} from './pages/css-elements/css-elements.component';
import {DataPopulationComponent} from './pages/data-population/data-population.component';

@NgModule({
    declarations: [
        AppComponent,
        TableComponent,
        WidgetsComponent,
        CssElementsComponent,
        DataPopulationComponent
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
