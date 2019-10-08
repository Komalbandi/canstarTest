/**
 * Created by komal on 7/10/2019.
 */
import {Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {TableComponent} from './pages/table/table.component';
import {WidgetsComponent} from './pages/widgets/widgets.component';
import {CssElementsComponent} from './pages/css-elements/css-elements.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'table', component: TableComponent},
    {path: 'widgets', component: WidgetsComponent},
    {path: 'cssElements', component: CssElementsComponent}
];
