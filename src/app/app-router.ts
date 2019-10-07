/**
 * Created by komal on 7/10/2019.
 */
import {Routes} from '@angular/router';

import {HomeComponent} from './pages/home/home.component';
import {TableComponent} from './pages/table/table.component';

export const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'table', component: TableComponent}
];
